const assert = require('assert');
const pgclient = require('../pgclient');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });

});

describe('PG Client', () => {
    describe('Connecting PG Client',  () => {
        it('should connect without error', async function()
        {
        await pgclient.connect();
        let database = await pgclient.query('SELECT id from cars');
        console.log(database);
        });
    })
})