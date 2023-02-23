import Page from '../pages/Page'
import App from '../App.vue'
import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),
  routes:[ 
    {path: '/page', Page },
    {path: '/', App}
],
  
})

export default router; 