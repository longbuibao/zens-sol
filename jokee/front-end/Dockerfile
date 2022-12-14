FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/src/front-end
COPY package*.json ./
RUN npm i
COPY ./ ./
RUN npm run build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/front-end/dist /usr/share/nginx/html