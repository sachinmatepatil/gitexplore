describe('visit store', () => {
    it('click contact us', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('sachin')