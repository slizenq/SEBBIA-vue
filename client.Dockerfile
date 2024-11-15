FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --prefer-offline
RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "client.cjs"]
