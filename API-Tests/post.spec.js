const axios = require('axios');
const { assert } = require('chai');
const config = require('../configs.json');

describe('POST to httpbin', () => {
  it('should make a post and return posted data', async () => {
    await axios({
      method: 'post',
      url: config.url + '/post',
      data: {
        name: 'Sam Shirley',
        likes: ['bikes', 'cars', 'dogs', 'tacos'],
      },
    }).then((res) => {
      assert.equal(res.status, 200);
      assert.typeOf(res.data.json.likes, 'array');
      assert.equal(res.data.json.likes[1], 'cars');
      assert.equal(res.data.json.name, 'Sam Shirley');
    });
  });
});
