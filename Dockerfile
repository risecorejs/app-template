FROM node:16.7.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm install pm2@latest -g

COPY . .

CMD npm run start
