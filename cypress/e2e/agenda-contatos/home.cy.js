/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Testes para home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar título Agenda de contatos', () => {
        cy.contains('Agenda de contatos').should('be.visible')
    })
})