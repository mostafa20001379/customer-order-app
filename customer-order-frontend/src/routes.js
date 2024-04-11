import Home from './pages/Home';
import Orders from './pages/Orders';
import CreateOrder from './pages/CreateOrder';
import EditOrder from './pages/EditOrder';
import ViewOrder from './pages/ViewOrder';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/orders',
        component: Orders,
        exact: true,
    },
    {
        path: '/orders/create',
        component: CreateOrder,
        exact: true,
    },
    {
        path: '/orders/:id/edit',
        component: EditOrder,
        exact: true,
    },
    {
        path: '/orders/:id',
        component: ViewOrder,
        exact: true,
    },
];

export default routes;
