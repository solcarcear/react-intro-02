import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en primera app', () => {
    // test('should return the message "Hola soy carlos" ', () => {
    //     const saludo = 'Hola soy carlos';
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('should return <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola soy carlos';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should return subt text', () => {
        const saludo = 'Hola soy carlos';
        const subTitulo = 'Hola soy un subitulo';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}
            />
        );
        const textParrafo = wrapper.find('p').text();

        expect(textParrafo).toBe(subTitulo);
    });


});
