import { useLayoutEffect, useContext, useState } from 'react'
import { VideosContext } from '../../providers/Videos/Videos.provider';

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    const { setGridLayout } = useContext(VideosContext);
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
            if (window.innerWidth <= 1000) {
                setGridLayout({
                    direction: 'column',
                    videoSection: 12,
                    relatedSection: 12,
                    theater: false
                });
            } else {
                setGridLayout({
                    direction: 'row',
                    videoSection: 9,
                    relatedSection: 3,
                    theater: false
                });
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [setGridLayout]);
    return size;
}
