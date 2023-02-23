import PostsPage from '@/pages/PostsPage'
import PostsPageStore from '@/pages/PostsPageStore'
import Page from '@/pages/Page'

import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),
  routes:[ 
    {path: '/',component : Page },
    {path: '/page',component : PostsPage },
    {path: '/store',component : PostsPageStore },
],
  
})

export default router; 