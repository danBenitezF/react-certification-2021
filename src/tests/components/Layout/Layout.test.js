import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../../components/Layout';

describe('Layout', () => {
    test('should contain a main element', () => {
        const wrapper = shallow(<Layout/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test(`should contain class name: 'container' `, () => {
        const wrapper = shallow(<Layout/>);
        const main = wrapper.find('main');
        expect(main.hasClass('container')).toBe(true);
    });
});
