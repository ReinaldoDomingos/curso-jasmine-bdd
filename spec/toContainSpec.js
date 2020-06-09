describe("Teste do toContain", function () {
    it("Deve validar o uso do toContain", function () {
        var texto = "Meu nome é Reinaldo"
        var frutas = ["laranja", "banana", "pera"]

        expect(texto).toContain("Reinaldo")
        expect(texto).not.toContain("reinaldo")

        expect(frutas).toContain("laranja")
        expect(frutas).not.toContain("uva")
     })
})