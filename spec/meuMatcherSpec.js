var meuMatcher = {
    toBeValidEmail: function (util, customEqualityTester) {
        var emailRegex = /\s+@\s+\.\s+/

        return {
            compare: function (actual, expect) {
                var result = {}
                if (expect === undefined) {
                    result.pass = emailRegex.test(actual)
                } else {
                    result.pass = expect.test(actual)
                }
                if (result.pass) {
                    result.message = actual + " é um email válido"
                } else {
                    result.message = actual + " não é um email válido"
                }
                return result;
            }
        }
    }
}

describe("Testes do objeto jasmine.addMatchers", function () {

    beforeEach(function () {
        jasmine.addMatchers(meuMatcher)
    })

    it("Deve verificar se um email é valido", function () {
        expect("email@dominio.com").toBeValidEmail()
        expect("email").toBeValidEmail()
    })
})