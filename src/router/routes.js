import Home from '@/pages/Home.vue';
import Login from '@/pages/auth/Login.vue';
import Logout from '@/pages/auth/Logout.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login Page',
      guest: true,
    },
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      title: 'Logout Page',
      requiresAuth: true,
    },
  },
];
