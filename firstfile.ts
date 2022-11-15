/// <reference types="Cypress" />


describe('visit store', () => {
    it('click contact us', () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('sachin')
        cy.get('#ContactUsFrm_email').type('sachin@asd.com')
        cy.get('#ContactUsFrm_enquiry').type('Hello')
        cy.get('.col-md-6 > .btn').click()
    });
});

