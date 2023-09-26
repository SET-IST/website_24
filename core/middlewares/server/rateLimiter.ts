import { DateTime } from 'luxon'
import { NextApiResponse } from 'next'
import { NextRequest } from 'next/server'
import { TooManyRequestsException } from '../../exceptions'

import { RedisService } from '../../services/server'

interface RLRecord {
  requestTimestamp: string
  requestCount: number
}

const WINDOW_SIZE_IN_HOURS = 24
const MAX_WINDOW_REQUEST_COUNT = 100
const WINDOW_LOG_INTERVAL_IN_HOURS = 1

export const customRedisRateLimiter = async (
  req: NextRequest,
  res: NextApiResponse,
  next: () => NextApiResponse
) => {
  if (req.ip === undefined) {
    next()
  }

  // fetch records of current user using IP address, returns null when no record is found
  const record = await RedisService.get(req.ip!)
  const currentRequestTime = DateTime.now()

  //  if no record is found , create a new record for user and store to redis
  if (record == null) {
    let newRecord: RLRecord[] = []
    let requestLog: RLRecord = {
      requestTimestamp: currentRequestTime.toISO()!,
      requestCount: 1,
    }
    newRecord.push(requestLog)
    await RedisService.set(req.ip!, JSON.stringify(newRecord))
    next()
  }

  // if record is found, parse it's value and calculate number of requests users has made within the last window
  let data: RLRecord[] = JSON.parse(record!)
  let windowStartTimestamp = DateTime.now()
    .minus({
      hours: WINDOW_SIZE_IN_HOURS,
    })
    .toISO()!

  let requestsWithinWindow = data.filter((entry) => {
    return entry.requestTimestamp > windowStartTimestamp
  })

  let totalWindowRequestsCount = requestsWithinWindow.reduce(
    (accumulator, entry) => {
      return accumulator + entry.requestCount
    },
    0
  )

  // if number of requests made is greater than or equal to the desired maximum, return error
  if (totalWindowRequestsCount >= MAX_WINDOW_REQUEST_COUNT) {
    throw new TooManyRequestsException(
      `You have exceeded the ${MAX_WINDOW_REQUEST_COUNT} requests in ${WINDOW_SIZE_IN_HOURS} hrs limit!`
    )
  } else {
    // if number of requests made is less than allowed maximum, log new entry
    let lastRequestLog = data[data.length - 1]
    let potentialCurrentWindowIntervalStartTimeStamp = currentRequestTime
      .minus({
        hours: WINDOW_LOG_INTERVAL_IN_HOURS,
      })
      .toISO()!

    //  if interval has not passed since last request log, increment counter
    if (
      lastRequestLog.requestTimestamp >
      potentialCurrentWindowIntervalStartTimeStamp
    ) {
      lastRequestLog.requestCount++
      data[data.length - 1] = lastRequestLog
    } else {
      //  if interval has passed, log new entry for current user and timestamp
      data.push({
        requestTimestamp: currentRequestTime.toISO()!,
        requestCount: 1,
      })
    }
    await RedisService.set(req.ip!, JSON.stringify(data))
    next()
  }
}
