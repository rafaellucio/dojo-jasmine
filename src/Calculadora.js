class Calculadora {

    soma(a, b) {
        if(this._isNumber(a) && this._isNumber(b)) return a + b;
    }

    multiplica(a, b) {
        if(this._isNumber(a) && this._isNumber(b)) return a * b;
    }

    divide(a, b) {
        if(this._isNumber(a) && this._isNumber(b) && b !== 0) {
            return a / b
        } else {
            throw `Argumento inválido: ${b}`;
        };
    }

    subtrai(a, b) {
        if(this._isNumber(a) && this._isNumber(b)) return a - b;
    }

    _isNumber(number) {
        if(typeof number !== 'number') {
            throw `Argumento inválido: ${number}`
        };
        return true;
    }
}