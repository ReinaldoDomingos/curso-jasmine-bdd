describe("Teste do afterEach", function () {
    var contador = 0

    beforeEach(function () {
        contador++;
    })
    afterEach(function () {
        contador = 0;
    })

    it("Deve garantir o valor 1 para o contador", function () {
        expect(contador).toEqual(1)
    })

    it("Deve ainda garantir o contador com o valor 1 ", function () {
        expect(contador).toEqual(1)
    })
})