import React from 'react';
import { screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import App from '../../../components/App/App.component';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from '../../../Routes/Routes.component';
import { VideosContext } from '../../../providers/Videos/Videos.provider';

describe('App', () => {
    test('should render correctly', () => { 
        const wrapper = shallow( <App/> );
        expect(wrapper).toMatchSnapshot();
   });

   test('should contain a switch router', () => {
       const wrapper = shallow( <App/> );
       const routes = wrapper.find('Routes');
       expect(routes.exists()).toBe(true);
   });

   test(`should show the home page with route '/'`, () => {
       const wrapper = mount( 
        <VideosContext.Provider
            value = {{
                setSearch: jest.fn(),
            }}
        >
            <MemoryRouter initialEntries={["/"]}>
                <Routes/>  
            </MemoryRouter>
        </VideosContext.Provider>
        );
        const homepage = wrapper.find('HomePage');
        expect(homepage.exists()).toBe(true);
   })

   test(`should show the not found page with route '/ggez'`, () => {
       const wrapper = mount( 
            <MemoryRouter initialEntries={["/ggez"]}>
                <Routes/>  
            </MemoryRouter>
        );
        const notFound = wrapper.find('NotFoundPage');
        expect(notFound.exists()).toBe(true);
   })
   
});
