FROM node:lts
WORKDIR /migrations
COPY ./ .
RUN npm install
CMD npm run db-migrate-up;