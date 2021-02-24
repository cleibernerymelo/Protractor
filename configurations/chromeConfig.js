const configCreator = require('../utils/configCreator')

module.exports.config = configCreator({
  capabilities: {
    directConnect: true,
    browserName: 'chrome',
    chromeOptions: {
      // args: ['--headless']
    }
  }
})
