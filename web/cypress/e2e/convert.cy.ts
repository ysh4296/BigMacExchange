describe('convert', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('can convert with selected currency', () => {
        cy.get('input[aria-label="currencyInput"]').type('1000000');

        cy.get('button[aria-label="selectFrom"]').click();
        cy.get('div[aria-label="United States"]').click();

        cy.get('button[aria-label="selectTo"]').click();
        cy.get('div[aria-label="South Korea"]').click();

        cy.get('button[aria-label="selectFrom"]').should(
            'have.text',
            'United States'
        );
        cy.get('button[aria-label="selectTo"]').should(
            'have.text',
            'South Korea'
        );
    });
});

describe('swap', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('can convert with selected currency', () => {
        cy.get('input[aria-label="currencyInput"]').type('1000000');

        cy.get('button[aria-label="selectFrom"]').click();
        cy.get('div[aria-label="United States"]').click();

        cy.get('button[aria-label="selectTo"]').click();
        cy.get('div[aria-label="South Korea"]').click();

        cy.get('button[aria-label="swap"]').click();

        cy.get('button[aria-label="selectFrom"]').should(
            'have.text',
            'South Korea'
        );
        cy.get('button[aria-label="selectTo"]').should(
            'have.text',
            'United States'
        );
    });
});
