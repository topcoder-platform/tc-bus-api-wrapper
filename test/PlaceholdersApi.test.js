/*
 * Tests for Events API
 */

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.should()
chai.use(chaiAsPromised)

const busApi = require('../index')

const config = {
  AUTH0_CLIENT_ID: process.env.TEST_AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET: process.env.TEST_AUTH0_CLIENT_SECRET,
  AUTH0_URL: process.env.TEST_AUTH0_URL,
  AUTH0_AUDIENCE: process.env.TEST_AUTH0_AUDIENCE,
  BUSAPI_URL: process.env.TEST_BUS_API_URL,
  KAFKA_ERROR_TOPIC: process.env.TEST_KAFKA_ERROR_TOPIC
}

const busApiClient = busApi(config)

describe('Placeholders API Tests', async () => {
  describe('Tests for clearPlaceholdersCache', async () => {
    // TODO: Swagger says that Return code is 204, but API returns 200
    it('clearPlaceholdersCache should return 200 if the call is successful', async () => {
      const result = await busApiClient.clearPlaceholdersCache()
      result.statusCode.should.be.eql(200)
    }).timeout(10000)
  })
})
