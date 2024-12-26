import { LOCALE_LIST } from '../../src/constant/locale';

describe('translation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('can translate', () => {
        LOCALE_LIST.forEach((locale) => {
            if (locale === 'en') return;
            cy.get('button[aria-label="selectLocale"]').click();
            cy.get(`div[aria-label="${locale}"]`).click();
            cy.url().should('include', `/${locale}`);
        });
    });
});
