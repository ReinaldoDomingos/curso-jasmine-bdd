describe("Teste do toBeUndefined", function () {
    it("Deve validar o uso do toBeUndefined", function () {
        var n1, n2 = undefined, n3 = false;

        expect(n1).toBeUndefined()
        expect(n2).toBeUndefined()

        expect(n3).not.toBeUndefined()
        expect(null).not.toBeUndefined()
    })
})