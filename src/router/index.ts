import {createRouter,RouteRecordRaw,createWebHistory} from "vue-router";

const routes:Array<RouteRecordRaw> = [
  {
    path:'/charts',
    component:()=>import('@/views/charts/index.vue')
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router