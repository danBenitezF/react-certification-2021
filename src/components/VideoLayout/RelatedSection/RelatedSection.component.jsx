import React from 'react';
import { VideosLayout } from '../../VideosLayout/VideosLayout.component';
import { YoutubeService } from '../../../utils/YoutubeService';
import { useFetch } from '../../../utils/hooks/useFetch';
export const RelatedSection = ({videoID}) => {
    const service = YoutubeService.getRelated;
    const { data: videos, loading } = useFetch(service, videoID);
    return (
        <> 
            {
                (!loading && videos?.length) ? 
                    <div>
                        <VideosLayout direction="column"  videos={videos} />
                    </div> 
                :
                    <p>loading related ...</p>
            }
        </>
        
    )
}
