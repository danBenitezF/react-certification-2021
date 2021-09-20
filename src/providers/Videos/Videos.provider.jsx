import React, { createContext, useReducer, useState } from 'react';
import { reducer } from '../../utils/reducers/reducer';

export const VideosContext = createContext();

export const VideosProvider = ({children}) => {
    const [globalState, dispatch] = useReducer(reducer, {
        theme: 'light',
    });
    const [search, setSearch] = useState('gatos 2021');
    const [gridLayout, setGridLayout] = useState({
        direction: 'row',
        videoSection: 9,
        relatedSection: 3,
        theater: false
    });
    return (
        <VideosContext.Provider
            value={{search, setSearch, gridLayout, setGridLayout, globalState, dispatch}}
        >
            {children}
        </VideosContext.Provider>
    );
};
