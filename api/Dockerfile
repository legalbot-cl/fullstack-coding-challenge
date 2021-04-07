FROM node:14.16-alpine

RUN mkdir -p /api
WORKDIR /api

COPY . /api
RUN npm install

CMD npm start
EXPOSE 4000