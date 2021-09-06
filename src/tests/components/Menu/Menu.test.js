import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '../../../components/Menu/Menu.component';

describe('Menu', () => {
    test('should render correctly', () => {
        const setIsOpen = jest.fn();
        const wrapper = shallow(<Menu isOpen={false} setIsOpen={setIsOpen} /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('setIsOpen should be called at least once ', () => {
        let isOpen = false;
        const setIsOpen = jest.fn();
        const wrapper = shallow(<Menu isOpen={isOpen} setIsOpen={setIsOpen} /> );
    })
    
});
