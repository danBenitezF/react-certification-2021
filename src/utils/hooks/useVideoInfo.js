import { useContext, useState, useEffect } from 'react';
import { VideosContext } from '../../providers/Videos/Videos.provider';
import { YoutubeService } from '../YoutubeService';

export const useVideoInfo = (videoID) => {
    const { video } = useContext(VideosContext);
    const [watchVideo, setWatchVideo] = useState({
        video: null, 
        error: null,
        loading: true,
    })
    
    useEffect(() => {
        // setWatchVideo({
        //     video, error: null, loading: false,
        // });
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
    }, [videoID, video]);
    return watchVideo;
}
