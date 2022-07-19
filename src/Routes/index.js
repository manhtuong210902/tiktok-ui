import routeConfig from '~/config/router';
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';

import { HeaderOnly } from '~/components/Layout';
import Search from '~/components/Layout/components/Search';

//Public Routes
const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
