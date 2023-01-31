/// <reference types="Cypress" />

describe('template spec', () => {
  it('can submit a form', () => {
    cy.visit('http://localhost:3000');
    cy.get('form').find('input[name=name]').type(' young kim  ');
    cy.get('form').find('input[name=email]').type('young@ykim.dev');
    cy.get('form').find('input[name=password]').type('fetchrewards');
    cy.get('form').find('select[name=occupation]').select('Widget Fabricator');
    cy.get('form').find('select[name=state]').select('Wisconsin');
    cy.get('#submitted').should('not.exist');
    cy.get('form').submit();
    cy.get('#submitted').should(
      'include.text',
      'Thank you for your submission!',
    );
  });
});
