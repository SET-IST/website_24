# Core

The core layer is where we place everything unrelated to our domain, such as utilities, technical implementations, or API.

For example:

- the functions that connect to your database
- the utilities that you use to authenticate users
- the provider to send emails
- the reusable UI components not related to any domain (ex. Dropdown, Button, TextInput)
  and more.

## Services

There are 3 core server services:

> ### Prisma Service
>
> Handles the lifecycle of PrismaClient and it's used for performing operations in the database <br><br> > **Example:**
>
> ```typescript
> const users = await PrismaService.user.findMany()
> ```
>
> **Docs:** <br>https://www.prisma.io/docs/concepts/components/prisma-client

> ### Redis Service
>
> Handles the lifecycle of Redis and it's used for api rate limiting and caching<br><br> > **Example:**
>
> ```typescript
> const userIp = await RedisService.get('user-ip')
> ```
>
> **Docs:** <br>https://luin.github.io/ioredis/classes/Redis.html

> ### Websocket Service
>
> Handles the lifecycle of IOServer and it's used for websocket communication<br><br> > **Example:**
>
> ```typescript
> const io = WebsocketService.getInstance()
> if (io) {
>   io.to('eykLs9b3s').emit('scan', { id: '18' })
> }
> ```
>
> **Docs:** <br>https://socket.io/docs/v4/
