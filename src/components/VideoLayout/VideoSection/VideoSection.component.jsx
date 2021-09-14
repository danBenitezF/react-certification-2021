import React, {useContext} from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import { VideoInfo } from './VideoInfo/VideoInfo.component';
import { VideosContext } from '../../../providers/Videos/Videos.provider';
import './VideoSection.style.css';

const VideoWrapper = styled.div`
    aspect-ratio: ${props => props.aspectRatio} 
`;

export const VideoSection = ({video}) => {
    const { id } = video;
    const videoURL = `https://www.youtube.com/watch?v=${id}`;
    const { gridLayout } = useContext(VideosContext);
    const aspectRatio = `${gridLayout.theater ? 21 : 16} / 9`;
    
    return (
        <>
            <VideoWrapper aspectRatio={aspectRatio}> 
                <ReactPlayer 
                    url={videoURL}
                    width='100%'
                    height='100%'
                    controls={true}
                    muted={true}
                    playing={true}
                />
            </VideoWrapper>
            <VideoInfo video={video} />
        </>
    )
}
