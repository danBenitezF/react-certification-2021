import React from 'react';
import { shallow, mount } from 'enzyme';
import { VideoLayout } from '../../../components/VideoLayout/VideoLayout.component';
import { VideosContext } from '../../../providers/Videos/Videos.provider';

describe('VideoLayout Component', () => {
    const video = {
        "video": {
          "id": "PqwQDRersIM",
          "title": "LaFerrari - Forza Horizon 4 | Logitech g29 gameplay",
          "etag": "S5_tJr0mdo0F7-6BH8hWfLzGXCE",
          "publishedAt": "2020-08-07T11:46:03Z",
          "channelId": "UCQvqWrkEHXWoOeocjiw8_KA",
          "channelTitle": "Xpertgamingtech",
          "description": "A freeroam drive in a Ferrari LaFerrari, driven using Logitech g29 with Thrustmaster TH8A as an analog handbrake on Forza Horizon 4. Enjoy!\n\nThe additional gauges display is my smartphone running SIM Dashboard app.\nSIMDashboard: https://www.stryder-it.de/simdashboard/?lang=en_US\n\nPC Specification (DESKTOP)\nProcessor: AMD Ryzen 3900X\nMotherboard: ASUS TUF GAMING X570-PLUS \nGPU: Zotac GTX 1080ti AMP! Extreme\nRAM: 16GB DDR4\n\nMusic Used: Kisnou - Quietness: https://youtu.be/BtMK_7-JEU8\n\n⚛️ Kisnou\nht...",
          "thumbnail": "{height: 180, url: \"https://i.ytimg.com/vi/PqwQDRer…}",
          "statistics": "{commentCount: \"1640\", dislikeCount: \"2008\", favori…}"
        }
    };

    test('should render correctly', () => {
        const wrapper = shallow(
            <VideosContext.Provider
                value={{
                    gridLayout: {}
                }}
            >
                <VideoLayout video={video}/>
            </VideosContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should contain a video and a related section', () => {
        const wrapper = mount(
            <VideosContext.Provider
                value={{
                    gridLayout: {},
                    setGridLayout: jest.fn()
                }}
            >
                <VideoLayout video={video}/>
            </VideosContext.Provider>
        );
        const videoSection = wrapper.find('VideoSection').exists();
        const relatedSection = wrapper.find('RelatedSection').exists();
        const components = videoSection && relatedSection;
        expect(components).toBe(true);
    })
    
    
});
