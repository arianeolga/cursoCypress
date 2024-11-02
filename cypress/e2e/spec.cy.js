describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.get('input[name="nome"]').type('Ariane');
    cy.get('input[name="email"]').type('ariane@123.com');
    cy.get('input[name="password"]').type('123ABCdefgh4567');
    cy.get('input[name="confirm_password"]').type('123ABCdefgh4567');
    cy.contains('button','Cadastrar').click();
  })
  it('botoes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.contains('p','Ainda não tem cadastro?');
    cy.get('.header__home').click();//clicar para voltar a tela inicial
    cy.contains('a','Ver pets disponíveis para adoção').click();
    cy.contains('p','Olá');
    cy.get('.header__home').click();//clicar para voltar a tela inicial
    cy.contains('a','Fazer login').click();
  })

  it('botão cadastrar', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.contains('p','Ainda não tem cadastro?');
  })
  it('botão pets disponiveis', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
     cy.contains('a','Ver pets disponíveis para adoção').click();
    cy.contains('p','Olá');
  })
  it('botão login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Fazer login').click();
    cy.contains('p','Já tem conta? Faça seu login:');
  })
})