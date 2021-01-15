# cars

## How to run


docker-compose up
cd db
npm install && npm run db-migrate-up 


Explanation
I have postgres server save as the database and have db-migrator to execute the initial migration. The cars service manage to pull all the ids from the database and use it to query the /car/{id} service in order. 

In a real life siutation, this will be query two different data sources than from the same tables.

The /car/{id} can either be query in single id or in batches of maximum 100. Consideirng the general id for a car is 7 characters, and the maximum secruity protocol sets the maxQueryString to 1024 and entire querystring to 2048 characters this should be no issue. 

I have created unit testing for both services, however haven't had time to give it time for integration testing. If time isn't a issue, then I should be able to create an integration testing this weekend as well.

