# cars

## How to run


docker-compose up

may have to `docker restart car` and `docker restart cars` for it to work properly if it doesnt work the first time

Explanation
I have postgres server save as the database and have db-migrator to execute the initial migration. The cars service manage to pull all the ids from the database and use it to query the /car/{id} service in order. 

In a real life siutation, this will be query two different data sources than from the same tables.

The /car/{id} can either be query in single id or in batches of maximum 100. Consideirng the general id for a car is 7 characters, and the maximum secruity protocol sets the maxQueryString to 1024 and entire querystring to 2048 characters this should be no issue. 

I have created unit testing for both services


GET /car
return a list of car id and their data

GET /car/{id}

params id - can either big a single id, or a list of id be separated by semicolon

for example you can send in /car/a;b;c as a param.

