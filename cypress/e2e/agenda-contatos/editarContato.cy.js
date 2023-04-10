/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Deve editar um contato da lista', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar o e-mail do contato Bruna Costa', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('costa.bruna@ebac.com.br')
        cy.get('.alterar').click()
    })
})