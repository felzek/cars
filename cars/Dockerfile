FROM node:lts as dev
WORKDIR /cars
COPY ./ .
RUN npm install
EXPOSE 3000
CMD [ "nodemon", "app.js" ]