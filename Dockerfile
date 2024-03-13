FROM node:latest

WORKDIR /app

COPY package*.json . 

RUN npm install --only=production && npm cache clean --force && npm install

COPY . .

RUN npm run build

CMD npm run start