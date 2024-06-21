import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/index.vue'), meta: { bgHeader: 'home' } },
      { path: '/apparel', component: () => import('src/pages/apparel.vue'), meta: { bgHeader: 'apparel' } },
      { path: '/entertainment', component: () => import('src/pages/entertainment.vue'), meta: { bgHeader: 'entertainment' } },
      { path: '/justice', component: () => import('src/pages/justice.vue'), meta: { bgHeader: 'justice' } },
      { path: '/about', component: () => import('src/pages/about.vue'), meta: { bgHeader: 'about' } },
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
