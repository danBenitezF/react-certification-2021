import { BASEURL, APIKEY } from '../config';
import { videosData } from '../videos-mock';
import { mapVideosData } from './mapVideoData';
const KEY = `&key=${APIKEY}`;

export const YoutubeService = {
    search: async (query, maxResults = 20) => {
        try {
            const REQUESTURL = `${BASEURL}search?part=snippet&q=${query}&maxResults=${maxResults}${KEY}`;
            const response = await fetch(REQUESTURL);
            const data = await response.json();
            const vids = mapVideosData(data.items);
            return vids;
        } catch (error) {
            throw new Error(error);
        }
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
        const REQUESTURL = `${BASEURL}videos?part=snippet&part=statistics&id=${videoId}&maxResults=20&type=video${KEY}`;
        const response = await fetch(REQUESTURL);
        const data = await response.json();
        const videos = mapVideosData(data.items);
        return videos[0];
    },
    getRelated: async (videoID) => {
        const REQUESTURL = `${BASEURL}search?part=snippet&relatedToVideoId=${videoID}&maxResults=20&type=video${KEY}`;
        const response = await fetch(REQUESTURL);
        const data = await response.json();
        const related = mapVideosData(data.items);
        return related;
    }
}
