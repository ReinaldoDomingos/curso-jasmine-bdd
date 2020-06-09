describe("Teste do toThrow", function () {
    it("Deve demostrar o uso do toThrow", function () {
        function mulltiplicar() {
            return numero * 10;
        }

        function somar(n1, n2) {
            return n1 + n2;
        }

        expect(mulltiplicar).toThrow()
        expect(somar).not.toThrow()
    })
})