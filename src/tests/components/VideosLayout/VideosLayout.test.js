import React from 'react';
import { shallow } from 'enzyme';
import { VideosLayout } from '../../../components/VideosLayout/VideosLayout.component';

describe('VideosLayout Component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<VideosLayout/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should contain grid element', () => {
        const wrapper = shallow(<VideosLayout/>);
        const grid = wrapper.find('WithStyles(ForwardRef(Grid))');
        expect(grid.exists()).toBe(true);
    })
    
});
