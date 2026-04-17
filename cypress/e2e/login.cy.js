describe('Login', () => {

  beforeEach(() => {
    // Arrange
    // cy.visit('http://localhost:4000')

    // usando a variavel de ambiente definida no package.json
    // cy.visit((Cypress.env('URL')))

    // usando a variavel de ambiente definida no cypress.config.js
    cy.visit('/')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act 
    cy.fazerLoginComCredenciaisValidas();

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act 
    cy.fazerLoginComCredenciaisInvalidas();

    // Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})