FROM node:16-alpine3.16
WORKDIR /usr/src/back-end
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN chmod +x start.sh
RUN chmod +x wait-db.sh
EXPOSE 3000
CMD ["sh", "./start.sh"]