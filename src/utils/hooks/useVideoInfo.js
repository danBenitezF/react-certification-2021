import { useState, useEffect } from 'react';
import { YoutubeService } from '../YoutubeService';

export const useVideoInfo = (videoID) => {
    const [watchVideo, setWatchVideo] = useState({
        video: null, 
        error: null,
        loading: true,
    })
    
    useEffect(() => {
        const service = YoutubeService.searchVideoInfo;
        service(videoID).then((response) => {
            setWatchVideo({
                video: response,
                loading: false,
                error: null
            });
        }).catch((error) => {
            setWatchVideo({
                video: null,
                loading: false,
                error
            });
        });
    }, [videoID]);
    return watchVideo;
}
