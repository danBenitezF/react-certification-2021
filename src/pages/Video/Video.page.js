import React from 'react';
import { useParams } from 'react-router';
import { useVideoInfo } from '../../utils/hooks/useVideoInfo';
import { VideoLayout } from '../../components/VideoLayout/VideoLayout.component';

export const Video = () => {
    const { videoId } = useParams();
    const watchVideo = useVideoInfo(videoId);
    const {video, loading} = watchVideo;
    return (
        <div>
            {
                (!loading && video) && <VideoLayout video={video} />
            }
        </div>
    )
}
