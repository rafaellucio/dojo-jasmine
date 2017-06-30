describe('Calculadora', () => {

    const calculadora = new Calculadora();

    it('Deve instanciar uma calculadora',  () => {
        expect(calculadora.constructor.name).toEqual('Calculadora');
    });

    describe('Soma', () => {

        it('Deve somar dois valores', () => {
            expect(calculadora.soma(10, 15)).toEqual(25);
        });

        it('Deve disparar uma exceção quando somar um dos valor a ou b não forem do tipo Number', () => {
            const firstValue = '10';
            const secondValue = {};
            const thirdValue = [];

            expect(() => calculadora.soma(firstValue, 15)).toThrow(`Argumento inválido: ${firstValue}`);
            expect(() => calculadora.soma(100, secondValue)).toThrow(`Argumento inválido: ${secondValue}`);
            expect(() => calculadora.soma(thirdValue, firstValue)).toThrow(`Argumento inválido: ${thirdValue}`);
        });

    });

    describe('Multiplicação', () => {

        it('Deve multiplicar dois valores', () => {
            expect(calculadora.multiplica(3, 5)).toEqual(15);
        });

        it('Deve disparar uma exceção quando multiplicar um dos valores a ou b não forem do tipo Number', () => {
            const firstValue = '10';
            const secondValue = {};
            const thirdValue = [];

            expect(() => calculadora.multiplica(firstValue, 15)).toThrow(`Argumento inválido: ${firstValue}`);
            expect(() => calculadora.multiplica(100, secondValue)).toThrow(`Argumento inválido: ${secondValue}`);
            expect(() => calculadora.multiplica(thirdValue, firstValue)).toThrow(`Argumento inválido: ${thirdValue}`);
        });

    });

    describe('Divisão', () => {

        it('Deve dividir dois valores', () => {
            expect(calculadora.divide(10, 2)).toEqual(5);
        });

        it('Deve disparar uma exceção quando dividir um dos valores a ou b não forem do tipo Number', () => {
            const firstValue = '10';
            const secondValue = {};
            const thirdValue = [];

            expect(() => calculadora.divide(firstValue, 15)).toThrow(`Argumento inválido: ${firstValue}`);
            expect(() => calculadora.divide(100, secondValue)).toThrow(`Argumento inválido: ${secondValue}`);
            expect(() => calculadora.divide(thirdValue, firstValue)).toThrow(`Argumento inválido: ${thirdValue}`);
        });

        it('Não deve dividir por 0', () => {
            const divisor = 0;
            expect(() => calculadora.divide(10, divisor)).toThrow(`Argumento inválido: ${divisor}`);
        })

    });

    describe('Subtração', () => {

        it('Deve subtrair dois valores', () => {
            expect(calculadora.subtrai(100, 150)).toEqual(-50);
        });

        it('Deve disparar uma exceção quando subtrair um dos valores a ou b não forem do tipo Number', () => {
            const firstValue = '10';
            const secondValue = {};
            const thirdValue = [];

            expect(() => calculadora.subtrai(firstValue, 15)).toThrow(`Argumento inválido: ${firstValue}`);
            expect(() => calculadora.subtrai(100, secondValue)).toThrow(`Argumento inválido: ${secondValue}`);
            expect(() => calculadora.subtrai(thirdValue, firstValue)).toThrow(`Argumento inválido: ${thirdValue}`);
        });

    });

})