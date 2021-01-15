FROM node:lts as dev
WORKDIR /car
COPY ./ .
RUN npm install
EXPOSE 3001
CMD [ "node", "app.js" ]