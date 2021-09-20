import React from 'react';
import { VideosLayout } from '../../VideosLayout/VideosLayout.component';
import { YoutubeService } from '../../../utils/YoutubeService';
import { useFetch } from '../../../utils/hooks/useFetch';
import { useContext } from 'react';
import { VideosContext } from '../../../providers/Videos/Videos.provider';
export const RelatedSection = ({videoID}) => {
    const service = YoutubeService.getRelated;
    const { gridLayout } = useContext(VideosContext);
    const { theater } = gridLayout;
    const direction = theater ? 'row' : 'column'
    const { data: videos, loading } = useFetch(service, videoID);
    return (
        <> 
            {
                (!loading && videos?.length) ? 
                        <VideosLayout direction={direction}  videos={videos} />
                :
                    <p>loading related ...</p>
            }
        </>
        
    )
}
