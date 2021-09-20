import { videosData } from '../videos-mock';
import { mapVideosData } from './mapVideoData';
import { BaseService } from './BaseService';

export const YoutubeService = {
    search: async (query, maxResults = 20) => {
        const response = await BaseService.get(`search?part=snippet&q=${query}&maxResults=${maxResults}`);
        const data = response.data;
        const vids = mapVideosData(data.items);
        return vids;
    },
    devSearch:  () => { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data  = mapVideosData(videosData.items);
                resolve(data );
            }, 500);
        });
    },
    searchVideoInfo: async (videoId) => {
        const response = await BaseService.get(`videos?part=snippet&part=statistics&id=${videoId}&maxResults=20&type=video`);
        const data = response.data;
        const vids = mapVideosData(data.items);
        return vids[0];
    },
    getRelated: async (videoID) => {
        const response = await BaseService.get(`search?part=snippet&relatedToVideoId=${videoID}&maxResults=20&type=video`);
        const data = response.data;
        const related = mapVideosData(data.items);
        return related;
    },
}
