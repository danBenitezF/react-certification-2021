import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../components/App/App.component';

describe('App', () => {
    test('should render correctly', () => { 
        const wrapper = shallow( <App/> );
        expect(wrapper).toMatchSnapshot();
   });

   test('should contain a switch router', () => {
       const wrapper = shallow( <App/> );
       expect(wrapper.find('Switch').exists()).toBe(true);
   });
});
