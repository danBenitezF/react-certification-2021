import axios from 'axios';
import { BASEURL, APIKEY } from '../config';
const KEYPART = `&key=${APIKEY}`;
export const BaseService = {
    get: async (requestURL) => {
        return await axios.get(`${BASEURL}${requestURL}${KEYPART}`);
    },
    post: async (requestURL, body) => {
        return await axios.post(`${BASEURL}${requestURL}${KEYPART}`, body);
    }
}
