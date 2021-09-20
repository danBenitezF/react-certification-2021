import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import NotFound from '../pages/NotFound';
import VideoPage from '../pages/Video/Video.page';

export const routes = [
    { path: '/', component: HomePage, exact: true },
    { path: '/login', component: LoginPage, exact: true },
    { path: '/watch/:videoId', component: VideoPage , exact: true },
    { path: '*', component: NotFound, exact: true },
];
