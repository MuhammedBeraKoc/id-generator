FROM node:12

WORKDIR /usr/src/id-generator-app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run docs

EXPOSE 5712

CMD [ "npm", "start" ]
