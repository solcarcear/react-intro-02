import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {
    let wrapper ;
    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>)
    });

    test('should return <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should return h2 counter', () => {
        const value = 10;
        const wrapper = shallow(<CounterApp value={value} />);
        const textCounter = wrapper.find('h2').text();
        const htmlCounter = wrapper.find('h2').html();

        expect(htmlCounter).toBe(`<h2>${value}</h2>`);
        expect(textCounter).toBe(value.toString());
    });

    test('should return h2 counter default value', () => {
        const defaultValue = 0;
        const textCounter = wrapper.find('h2').text();
        const htmlCounter = wrapper.find('h2').html();

        expect(htmlCounter).toBe(`<h2>${defaultValue}</h2>`);
        expect(textCounter).toBe(defaultValue.toString());
    });

    test('should increase counter with button +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const textCounter = wrapper.find('h2').text();
        expect(textCounter).toBe('1');
    });

    test('should decrease counter with button -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const textCounter = wrapper.find('h2').text();
        expect(textCounter).toBe('-1');
    });

    test('should set counter on default value with button reset', () => {
        const defaultValue = 100;
        const wrapper = shallow(<CounterApp value={defaultValue} />);
        wrapper.find('button').at(0).simulate('click');
        const counterTextIncreased= wrapper.find('h2').text();
        wrapper.find('button').at(1).simulate('click');
        const counterTextReseted= wrapper.find('h2').text();        
 
        expect(defaultValue.toString()).not.toBe(counterTextIncreased);
        expect(defaultValue.toString()).toBe(counterTextReseted);
    });


});