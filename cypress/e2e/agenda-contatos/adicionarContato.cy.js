/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Deve preencher o formulário e adicionar novo contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato a agenda com nome de João Carlos', () => {
        cy.get('input[type="text"]').type('João Carlos')
        cy.get('input[type="email"]').type('joao.carlos@carlinhos.com')
        cy.get('input[type="tel"]').type('11987451523')
        cy.get('.adicionar').click()
    })
})

