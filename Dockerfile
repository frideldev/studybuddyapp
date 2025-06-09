FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @ionic/cli

COPY . .

EXPOSE 3000

CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "3000"]
