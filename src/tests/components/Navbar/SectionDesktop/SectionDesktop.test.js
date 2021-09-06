import { shallow } from 'enzyme';
import React from 'react';
import { SectionDesktop } from '../../../../components/Navbar/SectionDesktop/SectionDesktop.component';
describe('SectionDesktop Component', () => { 
    test('should render correctly', () => {
        const wrapper = shallow(<SectionDesktop/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
