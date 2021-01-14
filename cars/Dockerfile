FROM node:lts as dev
WORKDIR /cars
COPY ./ .
RUN npm install
EXPOSE 3001
CMD [ "node", "app.js" ]