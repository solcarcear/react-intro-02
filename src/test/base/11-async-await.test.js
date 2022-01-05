import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await.js';


describe('Test on 11-async-await.js', () => {
    test('should return an url', async () => {
        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    })

});