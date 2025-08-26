describe('Teste de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('julia@email.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="cadastrarProdutos"]').click()
    cy.get('h1').contains('Cadastro de Produtos')
  })

    it('Falha no Login', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('julia@email.com')
    cy.get('[data-testid="senha"]').type('123')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')

  })
})

