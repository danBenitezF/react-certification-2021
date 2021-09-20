import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar from '../../../components/Navbar/Navbar.component';
import { MemoryRouter } from 'react-router-dom';
import { VideosContext } from '../../../providers/Videos/Videos.provider';

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
    
    test(`should contain a 'NavbarSearch', 'SectionDesktop' and 'SectionMobile` , () => {
        const wrapper = mount(
            <VideosContext.Provider 
                value = {{
                    setSearch: jest.fn(),
                }}
            >
                <MemoryRouter initialEntries={["/"]}>
                    <Navbar/>
                </MemoryRouter>
            </VideosContext.Provider>
        );
        const navbarSearch = wrapper.find('NavbarSearch').exists();
        const sectionDesktop = wrapper.find('SectionDesktop').exists();
        const sectionMobile = wrapper.find('SectionMobile').exists();
        const components = navbarSearch && sectionDesktop && sectionMobile;
        expect(components).toBe(true);
        
    });
});
