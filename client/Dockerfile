FROM node:14.16-alpine

RUN mkdir -p /frontend

WORKDIR /frontend

COPY . /frontend
RUN npm install
RUN npm run build

CMD node index.js
EXPOSE 4001