import { useState, useEffect } from 'react'
import { videosData } from '../../videos-mock';

export const useFetch = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        // TODO: filter only necessary properties
        // TODO: implement YT API
        const { items } = videosData;
        setVideos(items)
    }, [])

    return videos;
}
