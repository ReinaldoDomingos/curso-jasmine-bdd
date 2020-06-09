describe("Teste do toBeNull", function () {
    it("Deve validar o uso do toBeNull", function () {
        var n1 = null, n2 = undefined, n3, n4 = NaN, n5 = "";

        expect(n1).toBeNull()

        expect(n2).not.toBeNull()
        expect(n3).not.toBeNull()
        expect(n4).not.toBeNull()
        expect(n5).not.toBeNull()
    })
})