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

describe('Topics API Tests', async () => {
  describe('Tests for getTopics', async () => {
    it('getTopics should return 200 with array of topics', async () => {
      const result = await busApiClient.getTopics()
      result.statusCode.should.be.eql(200)
      result.body.should.be.an('array')
    }).timeout(10000)
  })

  describe('Tests for headTopics', async () => {
    it('headTopics should return 200 with empty body', async () => {
      const result = await busApiClient.headTopics()
      result.statusCode.should.be.eql(200)
      result.body.should.be.eql({})
    }).timeout(10000)
  })
})
