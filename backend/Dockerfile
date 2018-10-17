FROM node:10.8.0-alpine
RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app
COPY package*.json ./
RUN npm install
COPY . /home/nodejs/app
EXPOSE 80
CMD ["node", "index.js"]
