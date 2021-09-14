import React, { createContext, useState } from 'react';

export const VideosContext = createContext();

export const VideosProvider = ({children}) => {
    const [search, setSearch] = useState('');
    const [video, setVideo] = useState(null);
    const [gridLayout, setGridLayout] = useState({
        direction: 'row',
        videoSection: 9,
        relatedSection: 3,
        theater: false
    });
    return (
        <VideosContext.Provider
            value={{search, setSearch, video, setVideo, gridLayout, setGridLayout}}
        >
            {children}
        </VideosContext.Provider>
    );
};
