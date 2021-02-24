const helper = require('protractor-helper')
const Tag = require('../page-objetcs/tag')

describe('Dado que estou na pagina tag', () => {
  let tag

  beforeAll(() => {
    tag = new Tag()
    tag.visit()
  })

  describe('E existem 3 destinos na base de dados', () => {
    it('Então todos os cards devem ser renderizados', () => {
      helper.waitForElementVisibility(tag.destinations.cards.last())
      expect(tag.destinations.cards.count()).toBe(3)
    })

    describe('Quando eu visualizo o primeiro card', () => {
      it('Então eu vejo uma imagem, um paragrafo e uma âncora', () => {
        helper.waitForElementVisibility(tag.destinations.imageOfFirstCard)
        helper.waitForElementVisibility(tag.destinations.headingOfFirstCard)
        helper.waitForElementVisibility(tag.destinations.paragraphOfFirstCard)
        helper.waitForElementVisibility(tag.destinations.anchorOfFirstCard)
      })
    })
  })
})
