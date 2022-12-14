FROM node:16
WORKDIR /usr/src/back-end
COPY package*.json ./
RUN npm install
COPY ./ ./
# RUN chmod +x wait-db.sh
# RUN ./wait-db.sh db:5432 -t 100
RUN npm run prisma:deploy
RUN npm run prisma:seed
EXPOSE 3000 
CMD ["node", "index.js" ]