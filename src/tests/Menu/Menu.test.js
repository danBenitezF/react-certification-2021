import React from 'react';
import { shallow } from 'enzyme';
import { useState } from 'react';
import { Menu } from '../../components/Menu/Menu.component';

describe('Menu', () => {
    test('should render correctly', () => {
        const setIsOpen = jest.fn();
        const wrapper = shallow(<Menu isOpen={false} setIsOpen={setIsOpen} /> );
        expect(wrapper).toMatchSnapshot();
    });
});
