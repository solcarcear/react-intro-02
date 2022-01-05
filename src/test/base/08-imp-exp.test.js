import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp.js';
import heroes from '../../data/heroes.js';


describe('Test on 08-imp-exp.js', () => {
    test('getHeroeById should return an hero per id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        const heroData = heroes.find(h => h.id === id);

        expect(hero).toEqual(heroData);
    })

    test('getHeroeById should return an hero does not exists', () => {
        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
    })

    test('getHeroesByOwner should return DCs heros', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        const herosData = heroes.filter(h => h.owner === owner);
        expect(hero).toEqual(herosData);
        expect(hero.length).toBe(3);

    })
    test('getHeroesByOwner should return Marvels heros', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        const herosData = heroes.filter(h => h.owner === owner);
        expect(hero).toEqual(herosData);
        expect(hero.length).toBe(2);

    })

});