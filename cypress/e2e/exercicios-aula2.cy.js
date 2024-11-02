describe('Teste quem ama adota - exercicios - aula 2', () => {
    beforeEach(() =>{
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.title().should('eq','AdoPet');
    })
    it('Verifica mensagem do texto', () => {
      cy.contains('p','Quem ama adota!').should('be.visible');
      cy.contains('p','Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
})