import { DEVENV } from '../../config';
import { YoutubeService } from '../YoutubeService';

export const getEnvService = () => {
    return DEVENV ? YoutubeService.devSearch : YoutubeService.search;
}
