import React from 'react';
import { mount, shallow } from 'enzyme';
import { Menu } from '../../../components/Menu/Menu.component';
import { listMenu } from '../../../components/Menu/menuConfig';
import { MemoryRouter } from 'react-router';

describe('Menu', () => {
    test('should render correctly', () => {
        const setIsOpen = jest.fn();
        const wrapper = shallow(<Menu isOpen={false} setIsOpen={setIsOpen} /> );
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should contain list', () => {
        const setIsOpen = jest.fn();
        const wrapper = mount(
            <MemoryRouter>
                <Menu isOpen={true} setIsOpen={setIsOpen} /> 
            </MemoryRouter>
        );
        const listItems = wrapper.find('MenuItem');
        expect(listItems.length).toBe(listMenu.length);
    });
    
});
