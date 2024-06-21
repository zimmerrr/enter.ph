import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/index.vue') },
      { path: '/apparel', component: () => import('src/pages/apparel.vue') },
      { path: '/entertainment', component: () => import('src/pages/entertainment.vue') },
      { path: '/justice', component: () => import('src/pages/justice.vue') },
      { path: '/about', component: () => import('src/pages/about.vue') },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },

]

export default routes
