import React from 'react';
import { shallow } from 'enzyme';
import { VideosLayout } from '../../../components/VideosLayout/VideosLayout.component';
import { videosData } from '../../../videos-mock';

describe('VideosLayout Component', () => {
    let videos = [];
    beforeEach(() => {
        videos = videosData.items;
    })
    test('should render correctly', () => {
        const wrapper = shallow(<VideosLayout videos={videos} />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should contain grid element', () => {
        const wrapper = shallow(<VideosLayout videos={videos}/>);
        const grid = wrapper.find('WithStyles(ForwardRef(Grid))');
        expect(grid.exists()).toBe(true);
    })
    
});
