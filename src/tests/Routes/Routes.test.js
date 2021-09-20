import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Routes } from '../../Routes/Routes.component';
import { VideosContext } from '../../providers/Videos/Videos.provider';

describe('Routes', () => {
    test('should render correctly', () => {
        const wrapper = shallow(
            <MemoryRouter>
                <Routes></Routes>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should have routes configured to be used', () => {
        const wrapper = mount(
            <VideosContext.Provider 
                value = {{
                    search: '',
                }}
            >
                <MemoryRouter>
                    <Routes></Routes>
                </MemoryRouter>
            </VideosContext.Provider>
        );
    });
    
    
});
