import PostsPage from '../pages/PostsPage'
import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),
  routes:[ 
    {path: '/',component : PostsPage },
],
  
})

export default router; 