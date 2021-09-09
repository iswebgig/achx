
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'chat', component: () => import('pages/Chat.vue') },
      { path: 'artist', component: () => import('pages/Artist.vue') },
      { path: 'merchandise', component: () => import('pages/Merchandise.vue') },
      { path: 'donations', component: () => import('pages/Donations.vue') },
      { path: 'video', component: () => import('pages/myVideo.vue') },
      { path: 'tickets', component: () => import('pages/Tickets.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
