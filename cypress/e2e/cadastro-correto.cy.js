describe('Pagina de Cadastro', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  it('Deve preencher os campos corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('OlgaL','olgal@1234.com','pW1234567899');
  })
})