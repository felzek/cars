const assert = require('assert');
const pgclient = require('../models/pgclient');
const axios = require('axios');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

});

describe('PG Client', () => {
    describe('Connecting PG Client',  (done) => {
        it('should connect without error', async function()
        {
        await pgclient.connect();
        done();
        });
        it('should query the database and return json without error', async function()
        {
        await pgclient.connect();
        done();
        });
    })
    describe('request List of Ids', (done) => {
        desecribe('single Id')
        {
          let res;
        try{
          const res = await axios.get('http://localhost:3000/car/JH290XJ;');
      }
          catch(err)
          {
              assert(err,!err)
          }

        }
    })
})