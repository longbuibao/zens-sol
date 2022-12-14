#!/usr/bin/env bash
./wait-db.sh db:5432
npm run prisma:deploy
npm run prisma:generate
npm run prisma:seed
node index.js
