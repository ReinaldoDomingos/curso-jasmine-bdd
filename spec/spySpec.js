xdescribe("Testes com spy", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2
        },
        subtrair: function (n1, n2) {
            return n1 - n2
        }
    }

    beforeAll(function () {
        // Informa para usar o metodo original
        // spyOn(Calculadora, "somar").and.callThrough()
        spyOn(Calculadora, "somar").and.returnValue(10)
        // spyOn(Calculadora, "somar").and.returnValues(1, 5)
        // spyOn(Calculadora, "somar").and.callFake(function (n1, n2) {
        //     return n1 - n2;
        // })
        // spyOn(Calculadora, "somar").and.throwError("erro")
        spyOn(Calculadora, "subtrair")
    })

    // it("deve posssuir o método somar como não definido", function () {
    //     expect(Calculadora.somar(1, 1,)).toBeUndefined()
    // })

    // it("deve chamar o método somar ao menos uma vez", function () {
    //     expect(Calculadora.somar).not.toHaveBeenCalled()
    //     Calculadora.somar(1, 1,)
    //     expect(Calculadora.somar).toHaveBeenCalled()
    // })

    // it("deve chamar o método somar ao duas vezes", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(1, 2)
    //     expect(Calculadora.somar).toHaveBeenCalledTimes(2)
    // })

    // it("deve chamar o método somar com os parametros valido", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(1, 2)
    //     expect(Calculadora.somar).toHaveBeenCalledWith(1, 1)
    //     expect(Calculadora.somar).toHaveBeenCalledWith(1, 2)
    // })

    // it("deve executar o metodo somar original", function () {
    //     expect(Calculadora.somar(1, 1)).toEqual(2)
    //     expect(Calculadora.subtrair(2, 1)).toBeUndefined()
    // })

    // it("deve retornar 10 para o metodo somar", function () {
    //     expect(Calculadora.somar(1, 2)).toEqual(10)
    // })

    // it("deve retornar valores distintos para o metodo somar", function () {
    //     expect(Calculadora.somar(3, 4)).toEqual(1)
    //     expect(Calculadora.somar(1, 2)).toEqual(5)
    //     expect(Calculadora.somar(4, 4)).toBeUndefined()
    // })

    // it("deve transformar  o metodo somar em subtração", function () {
    //     expect(Calculadora.somar(5, 2)).toEqual(3)
    // })

    // it("deve lançar  um erro somar", function () {
    //     expect(function () {
    //         Calculadora.somar(1, 1)
    //     }).toThrowError("erro")
    // })

    // it("deve demostrar o uso do calls.any", function () {
    //     Calculadora.somar(1, 1)
    //     expect(Calculadora.somar.calls.any()).toBeTruthy()
    // })

    // it("deve demostrar o uso do calls.count", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(2,2)
    //     expect(Calculadora.somar.calls.count()).toEqual(2)
    // })

    // it("deve demostrar o uso do calls.argsFor", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(2, 2)
    //     expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 1])
    //     expect(Calculadora.somar.calls.argsFor(1)).toEqual([2, 2])
    // })

    // it("deve demostrar o uso do calls.allArgs", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(2, 2)
    //     expect(Calculadora.somar.calls.allArgs()).toEqual([[1, 1], [2, 2]])
    // })

    // it("deve demostrar o uso do calls.all", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(2, 2)
    //
    //     var retorno = Calculadora.somar.calls.all()
    //     expect(retorno[1].object).toEqual(Calculadora)
    //     expect(retorno[1].args).toEqual([2, 2])
    //     expect(retorno[1].returnValue).toEqual(10)
    // })

    // it("deve demostrar o uso do calls.mostRecent", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(2, 2)
    //
    //     var retorno = Calculadora.somar.calls.mostRecent()
    //     expect(retorno.object).toEqual(Calculadora)
    //     expect(retorno.args).toEqual([2, 2])
    //     expect(retorno.returnValue).toEqual(10)
    // })

    // it("deve demostrar o uso do calls.first", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(2, 2)
    //
    //     var retorno = Calculadora.somar.calls.first()
    //     expect(retorno.object).toEqual(Calculadora)
    //     expect(retorno.args).toEqual([1, 1])
    //     expect(retorno.returnValue).toEqual(10)
    // })

    // it("deve demostrar o uso do calls.reset", function () {
    //     Calculadora.somar(1, 1)
    //     Calculadora.somar(2, 2)
    //
    //     expect(Calculadora.somar.calls.any()).toBeTruthy()
    //     Calculadora.somar.calls.reset()
    //     expect(Calculadora.somar.calls.any()).toBeFalsy()
    // })
})

describe("Testes do objeto jasmine.createSpy", function () {
    // var somar
    var Calculadora

    beforeAll(function () {
        // somar = jasmine.createSpy("somar");
        Calculadora = jasmine.createSpyObj("Calculadora", ["somar", "subtrair"])

        Calculadora.somar.and.returnValue(5)
    })

    // it('deve demostrar o uso do jasmine.createSpy', function () {
    //     somar(1, 2)
    //
    //     expect(somar).toHaveBeenCalled();
    //     expect(somar).toHaveBeenCalledWith(1, 2);
    // });

    it('deve demostrar o uso do jasmine.createSpyObj', function () {
        var returno = Calculadora.somar(1, 2)

        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
        expect(returno).toEqual(5)
    });
})
