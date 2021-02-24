const helper = require('protractor-helper')
const Home = require('../page-objetcs/home')
// const ProtractorPerf = require('protractor-perf')

describe('Dado que estou na pagina inicial', () => {
  let homepage

  beforeAll(() => {
    homepage = new Home()
    homepage.visit()
  })

  describe('E existem 5 cards na base de dados', () => {
    // const perf = new ProtractorPerf(protractor)

    it('Então todos os cards devem ser renderizados', () => {
      // perf.start()
      helper.waitForElementVisibility(homepage.tags.cards.last())
      expect(homepage.tags.cards.count()).toBe(5)
      // perf.stop()
      // if (perf.isEnabled) {
      // expect(perf.getStats('meanFrameTime')).toBeLessThan(30)
      // }
    })

    describe('Quando eu visualizo o primeiro card', () => {
      // const perf = new ProtractorPerf(protractor, browser)
      it('Então eu vejo uma imagem, um título e uma âncora', () => {
        // perf.start()
        helper.waitForElementVisibility(homepage.tags.imageOfFirstCard)
        helper.waitForElementVisibility(homepage.tags.headingOfFirstCard)
        helper.waitForElementVisibility(homepage.tags.anchorOfFirstCard)
        // perf.stop()
        // if (perf.isEnabled) {
        // expect(perf.getStats('meanFrameTime')).toBeLessThan(30)
        // }
      })
    })
  })
})
