import React, { useContext } from 'react';
import { Grid  } from '@material-ui/core';
import { VideoSection } from './VideoSection/VideoSection.component';
import { VideosContext } from '../../providers/Videos/Videos.provider';
import { RelatedSection } from './RelatedSection/RelatedSection.component';
import { useWindowSize } from '../../utils/hooks/useWindowSize';


export const VideoLayout = ({video}) => {
    const { gridLayout } = useContext(VideosContext);
    const { direction, videoSection, relatedSection } = gridLayout;
    useWindowSize();
    return (
        <Grid 
            direction={direction} container 
            justifyContent="flex-start"
            alignItems="flex-start" 
            spacing={1}
        >
            <Grid item xs={videoSection}>
                <VideoSection video={video} />
            </Grid>
            <Grid item xs={relatedSection}>
                <RelatedSection videoID={video.id}/>
            </Grid>
        </Grid>
    )
}
