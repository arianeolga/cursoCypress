describe('Pagina de Cadastro', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
  it('Deve preencher os campos de login corretamente para autenticar o usuário na página', () => {
    cy.login('olga@123.com', '123ABCdefgh4567');
  })
})