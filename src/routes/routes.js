import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
        
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/humor',
        name: 'humor',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Humor.vue'),
        meta: {
          requiresLogin: true
        }
      },
      {
        path: '/tabelahumor',
        name: 'tabelahumor',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Humor/TabelaHumor.vue'),
        meta: {
          requiresLogin: true
        }
      },
      {
        path: '/remedios',
        name: 'remedios',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Remedios.vue')
      },
      {
        path: '/dor',
        name: 'dor',
        component: () => import(/* webpackChunkName: "demo" */ '../views/CadastrarDor.vue')
      },
      {
        path: '/tabelador',
        name: 'tabelador',
        component: () => import(/* webpackChunkName: "demo" */ '../views/TabelaDor.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
