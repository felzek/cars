FROM node:lts as a
COPY . /app
WORKDIR /app
RUN yarn 


FROM a as db-migrator 
CMD yarn db-migrate-up