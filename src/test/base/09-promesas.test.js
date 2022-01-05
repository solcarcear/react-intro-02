import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Test on 09-promesas.js', () => {
    test('getHeroeByIdAsync should return a hero', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(
            hero => {
                expect(hero).toEqual(heroes[0]);
                done();
            }
        );
    });

    test('getHeroeByIdAsync should return an error because the hero does not exist', (done) => {
            const id = 10;
            getHeroeByIdAsync(id)
            .catch(error => {
                    expect(error).toBe('No se pudo encontrar el héroe');
                    done();
                }
            );
        });

});