import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../../components/Navbar/Navbar.component';
import { SectionMobile } from '../../../components/Navbar/SectionMobile/SectionMobile.component';
import { SectionDesktop } from '../../../components/Navbar/SectionDesktop/SectionDesktop.component';
import { NavbarSearch } from '../../../components/Navbar/NavbarSearch/NavbarSearch.component';

describe('Navabar', () => {
    test(`should render correctly`, () => { 
        const wrapper = shallow(<Navbar/>);
        expect(wrapper).toMatchSnapshot();
        
    });

    test(`should contain an 'appbar' element`, () => { 
        const wrapper = shallow(<Navbar/>);
        const appbar = wrapper.find('WithStyles(ForwardRef(AppBar))');
        expect(appbar.exists()).toBe(true);
    });
    
    test(`should contain an 'NavbarSearch', 'SectionDesktop' and 'SectionMobile` , () => {
        const navbarSearch = shallow(<NavbarSearch/>);
        const sectionDesktop = shallow(<SectionDesktop/>);
        const sectionMobile = shallow(<SectionMobile/>);

        const components = navbarSearch.exists() && sectionDesktop.exists() && sectionMobile.exists();
        expect(components).toBe(true);
        
    });
});
