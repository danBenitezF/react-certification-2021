import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from "react-dom/test-utils";
import { NavbarSearch } from '../../../../components/Navbar/NavbarSearch/NavbarSearch.component';
import { VideosContext } from '../../../../providers/Videos/Videos.provider';

describe('Navbar Search', () => {
    test('should render correctly', () => {
        const wrapper = shallow(
            <VideosContext.Provider 
                value = {{
                    setSearch: jest.fn(),
                }}
            >
                <NavbarSearch/>
            </VideosContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should update the input value', () => {
        const wrapper = mount(
            <VideosContext.Provider 
                value = {{
                    setSearch: jest.fn(),
                }}
            >
                <NavbarSearch/>
            </VideosContext.Provider>
        );
        const input = wrapper.find('WithStyles(ForwardRef(InputBase))').at(0);
        const value = 'Wizeline';
        act(() => {
            input.props().onChange({ target: { value } });
        });
        wrapper.update();
        const updatedInput = wrapper.find('WithStyles(ForwardRef(InputBase))').at(0);
        const inputValue = updatedInput.props().value;
        expect(inputValue).toBe(value);
    });

    test('should not submit value', () => {
        const wrapper = mount(
            <VideosContext.Provider 
            value = {{
                setSearch: jest.fn(),
            }}
            >
                <NavbarSearch/>
            </VideosContext.Provider>
        );
        const instance = wrapper.instance();
        // const onSearchFn = jest.spyOn(instance, 'onSearch');
        const input = wrapper.find('WithStyles(ForwardRef(InputBase))').at(0);
        const value = '';
        act(() => {
            input.props().onChange({ target: { value } });
        });
        wrapper.update();
        const form = wrapper.find('form').simulate('submit', { preventDefault(){} });
        // expect(onSearchFn).toHaveBeenCalled();
    });

});
