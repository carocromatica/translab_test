const assert = require('chai').assert;

global.window = global;
require('../src/js/validate'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar emails', () => { //Describe lo que habrá dentro de cada función
    describe('Debería verificar si existe el arroba', () => {
        it('Debería el correo tener solo un arroba', () => { //Caso de prueba
            assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("asdf@@asdf.com"), false); //validate email es el nombre de mi funcion
            assert.equal(validateEmail("asdf.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', () => {
            assert.equal(validateEmail(".com@asdf"), false);
            assert.equal(validateEmail("fabian@laboratoria.la"), true);
        });
    }); (
        describe('Debería verificar si tiene un dominio', () => {
            it('Tiene un punto y luego solo caracteres del alfabeto', () => {
                assert.equal(validateEmail('asdf@asdf'), false);
                assert.equal(validateEmail('asdf@asdf.'), false);
            });
        }));
    describe('Debería verificar que no tenga carácteres raros', () => {

    }); (
        describe('Debería verificar que tenga al menos 1 caracter antes del arroba', () => {

        }));
});


// primer test de caro ;_;



const experimento = require('../src/js/validate');
describe("experimento()", () => {//Llamar a la función que quiero testear
    it("experimento es una funcion", () => {
        assert.ok(experimento);
    })

});;

describe("experimento()", () => {//para ver si resulta :c
    it("experimento retorna holi", () => {
      
        challa.should.be.a( 'holi' );

    })


});;

