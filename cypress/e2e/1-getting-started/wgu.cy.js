


describe("Test WGU home page UI", () => {
  beforeEach(() => {

    cy.visit('https://wgu.edu')
  });

  it('Check if Certain tags and Texts are present', () => {

    cy.get('.header-buttons .text-only').should('have.text', 'Request Info');
    cy.get('.cmp-copyright .cmp-copyright--links .cmp-copyright--link:nth-child(2)').should('have.text', 'Contact Us');
  });

});
