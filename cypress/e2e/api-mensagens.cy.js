describe('Api Adopet', ()=>{
    const tempoEsperado = Math.random() * 1000

    it('Mensagens da API', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/cbb112b5-e5a6-4abe-b044-76e7cd',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })

})