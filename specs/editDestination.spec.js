const helper = require('protractor-helper')
const Destination = require('../page-objetcs/destination')
const EditDestination = require('../page-objetcs/editDestination')
const faker = require('faker')

describe('Given Im at a random edit destination page', () => {
    let editDestination

    beforeEach(() => {
        editDestination = new EditDestination()
        editDestination.visit()
    });
    it('Then I see an image, and a form to edit the name and description', () => {
        helper.waitForElementVisibility(editDestination.self.image)
        helper.waitForElementVisibility(editDestination.form.nameLabel)
        helper.waitForElementVisibility(editDestination.form.nameInput)
        helper.waitForElementVisibility(editDestination.form.descriptionLabel)
        helper.waitForElementVisibility(editDestination.form.descriptionInput)
        helper.waitForElementVisibility(editDestination.form.updateButton)
    });

    describe('When I submit the form with less than the minimum required characters', () => {
        beforeEach(() => {
            editDestination
            .form
            .submitFormAfterClearingAndFillingItWith('Ab', 'Abcdefghi')
        });
        it('Then both input fields are wrapped in a. field_with_erros div', () => {
            helper.waitForElementVisibility(editDestination.form.nameInputWithError)
            helper.waitForElementVisibility(editDestination.form.descriptionInputWithError)
        });
    });

    describe('When sucessfully submitting for thea new name and description', () => {
        let destinationUrl
        const randomUuid = faker.random.uuid()
        const fiveRandomWords = faker.random.words(5)

        beforeEach(() => {
            browser.getCurrentUrl().then(url => {
                destinationUrl = url.replace('/edit', '')
            })
            editDestination
            .form
            .submitFormAfterClearingAndFillingItWith(randomUuid, fiveRandomWords)
        });
        fit('Then Im redirected to the destination view page, and I see the update info', () => {
            const destination = new Destination()
            helper.waitForUrlToBeEqualToExpectedUrl(destinationUrl)
            helper.waitForTextToBePresentInElement(
                destination.self.heading,
                randomUuid
            )
            helper.waitForTextToBePresentInElement(
                destination.self.paragraph,
                fiveRandomWords
            )
        });
    });
});
