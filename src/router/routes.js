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
        path: '/authors',
        name: 'Authors',
        component: () => import('pages/viewAuthors.vue'),
        meta: { requiresAuth: false },
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('pages/ProfilePage.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: '/admin',
        name: 'admin',
        component: () => import('pages/adminPage.vue'),
        meta: { requiresAuth: true, requiresAdmin: true },
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
