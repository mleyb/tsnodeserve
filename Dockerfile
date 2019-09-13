FROM node:8-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./dist /app
CMD node index.js
EXPOSE 8083