FROM node:16

WORKDIR /app

COPY package*.json .

COPY . . 

RUN ["npm", "install"]

CMD ["node", "/app/index.js"]

EXPOSE 3000

