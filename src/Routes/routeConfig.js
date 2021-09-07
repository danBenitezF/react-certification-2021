import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import NotFound from '../pages/NotFound';

export const routes = [
    { path: '/', component: HomePage, exact: true },
    { path: '/login', component: LoginPage, exact: true },
    { path: '*', component: NotFound, exact: true },
];
