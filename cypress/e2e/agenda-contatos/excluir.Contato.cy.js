/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Deve excluir um contato da lista', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve excluir da agenda um contato com o nome de Felipe Lacerda', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
    })
})