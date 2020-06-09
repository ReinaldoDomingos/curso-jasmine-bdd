describe("Teste do toBeTruthy", function () {
    it("Deve validar o uso do toBeTruthy", function () {
        var n1 = 10, n2 = undefined, n3 = 0, n4 = "", n5 = null, n6 = NaN, n7;

        expect(n1).toBeTruthy()
        expect("teste").toBeTruthy()
        expect(true).toBeTruthy()

        expect(n2).not.toBeTruthy()
        expect(n3).not.toBeTruthy()
        expect(n4).not.toBeTruthy()
        expect(n5).not.toBeTruthy()
        expect(n6).not.toBeTruthy()
        expect(n7).not.toBeTruthy()
        expect(false).not.toBeTruthy()
    })
})