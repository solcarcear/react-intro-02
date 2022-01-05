import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('Test on 02-template-string.js', () => {
    test('getSaludo should return hola carlos', () => {
        const nombre = 'carlos';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`);
    });

    test('getSaludo should return default value', () => {
        const defaultValue = 'alberto';
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola ${defaultValue}`);
    })

});