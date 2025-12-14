// src/router/routes.js
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/IndexPage.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: '/books',
        name: 'Books',
        component: () => import('pages/viewBooks.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('pages/ProfilePage.vue'),
        meta: {  requiresAuth: true },
      },

      // {
      //   path: 'profile',
      //   name: 'Profile',
      //   component: () => import('pages/ProfilePage.vue'),
      //   meta: { requiresAuth: true },
      // },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        name: 'LoginPage',
        component: () => import('pages/LoginPage.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
