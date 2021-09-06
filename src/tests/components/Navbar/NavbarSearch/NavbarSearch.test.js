import React from 'react';
import { shallow } from 'enzyme';
import { NavbarSearch } from '../../../../components/Navbar/NavbarSearch/NavbarSearch.component';

describe('Navbar Search', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<NavbarSearch/>);
        expect(wrapper).toMatchSnapshot();
    });
})
