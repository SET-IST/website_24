import { Redis, RedisOptions } from 'ioredis'

let redis: Redis

let config: RedisOptions = {
  maxRetriesPerRequest: 0,
}

if (process.env.NODE_ENV === 'production') {
  config = {
    host: 'redis-service',
    port: 6379,
    ...config,
  }
  redis = new Redis(config)
} else {
  if (!global.redis) {
    global.redis = new Redis(config)
  }

  redis = global.redis
}

export { redis as RedisService }
