FROM node:lts
WORKDIR /migrations
COPY ./ .
RUN npm install
EXPOSE 3000
CMD npm db-migrate-up;