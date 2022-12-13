const axios = require('axios');
const { expect, assert } = require('chai');
const config = require('../configs.json');

describe('GET httpbin', () => {
  it('should confirm data and status in response', async () => {
    await axios({
      method: 'get',
      url: config.url + '/get',
    }).then((res) => {
      expect(res.status).to.equal(200);
      assert.typeOf(res.data.args, 'object');
      assert.equal(res.data.origin, '136.62.164.172');
    });
  });
});
