import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones.js';


describe('Test on 05-funciones.js', () => {
    test('getUser should return an object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUser should return an object', () => {
        const nombre = 'carlos';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
});

