# Solution for ZenS test

## The algorithm

### This is my test cases for this `minMaxSum` function in the `algo` directory

```js
  expect(minMaxSum([1, 2, 3, 4, 5])).toMatchObject({ min: 10, max: 14 })
  expect(minMaxSum([1, 3, 5, 7, 9])).toMatchObject({ min: 16, max: 24 })
  expect(minMaxSum([0, -1, 100, 1, 3])).toMatchObject({ min: 3, max: 104 })
  expect(minMaxSum([0, -1, -2, -3, -4])).toMatchObject({ min: -10, max: -6 })
  expect(minMaxSum([0, 0, 0, 0, 0])).toMatchObject({ min: 0, max: 0 })
```

- Run `npm i` to install necessary packages for testing.
  
- Run `npm run test` to test the function.

## The Jokee app

### Prerequisites

- **Docker Compose** - This application is tested with Docker Compose version v2.12.2. You can follow instructions <https://docs.docker.com/compose/install/> to install Docker Compose on your machine.

### Up and running application

- Move to folder `jokee` and create a `.env` file to connecto database. I have some default value for the `POSTGRES_USER` and `POSTGRES_PASSWORD` in `docker-compose.yml` file
  
```sh
DATABASE_URL="postgresql://postgres:password@db:5432/zens?schema=public"
```

- Spin up the application by running:

```sh
docker compose up -d
```

- Open your browser, navigate to <http://localhost:3000> and enjoy

- The `Likes` table can be view by using any database client (me using DataGrip) or any tool by access `postgresql://postgres:password@db:5432/zens?schema=public`
