var calculadora = require('./calculadora.js')
var assert = require('assert');

describe('Calculadora', function() {
    describe('#somar()', function() {
      
      it('deve retornar 3 quando 2 e 1 são informados', function() {
        assert.equal(calculadora.somar(2,1), 3);
      });

    });

    describe('#subtrair()', function() {
      
      it('deve retornar 1 quando 2 e 1 são informados', function() {
        assert.equal(calculadora.subtrair(2,1), 1);
      });

    });




  });