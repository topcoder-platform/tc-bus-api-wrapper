/*
 * Tests for Events API
 */

const _ = require('lodash')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const { testEvent } = require('./testData')

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

describe('Events API Tests', async () => {
  describe('Tests for postEvent', async () => {
    it('postEvent should be rejected with 400 if the topic is missing', async () => {
      await busApiClient.postEvent(_.omit(testEvent, ['topic'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postEvent should be rejected with 400 if the originator is missing', async () => {
      await busApiClient.postEvent(_.omit(testEvent, ['originator'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postEvent should be rejected with 400 if the timestamp is missing', async () => {
      await busApiClient.postEvent(_.omit(testEvent, ['timestamp'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postEvent should be rejected with 400 if the mime-type is missing', async () => {
      await busApiClient.postEvent(_.omit(testEvent, ['mime-type'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postEvent should be rejected with 400 if the payload is missing', async () => {
      await busApiClient.postEvent(_.omit(testEvent, ['payload'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postEvent should return 204 if the valid event is posted to Bus', async () => {
      const result = await busApiClient.postEvent(testEvent)
      result.statusCode.should.be.eql(204)
    }).timeout(10000)
  })

  describe('Tests for postError', async () => {
    it('postError should be rejected with 400 if the originator is missing', async () => {
      await busApiClient.postError(_.omit(testEvent, ['originator'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postError should be rejected with 400 if the timestamp is missing', async () => {
      await busApiClient.postError(_.omit(testEvent, ['timestamp'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postError should be rejected with 400 if the mime-type is missing', async () => {
      await busApiClient.postError(_.omit(testEvent, ['mime-type'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postError should be rejected with 400 if the payload is missing', async () => {
      await busApiClient.postError(_.omit(testEvent, ['payload'])).should.be.rejectedWith('Bad Request')
    }).timeout(10000)

    it('postError should return 204 if the valid event is posted to Bus', async () => {
      const result = await busApiClient.postError(testEvent)
      result.statusCode.should.be.eql(204)
    }).timeout(10000)
  })
})
