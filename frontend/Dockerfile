FROM node:10.8.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-script@1.1.1 -g --silent
COPY ./src /usr/src/app/src
COPY ./public /usr/src/app/public
RUN npm run build

FROM nginx:1.14.0-alpine
RUN rm -rf /etc/nginx/conf.d
COPY ./conf /etc/nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
