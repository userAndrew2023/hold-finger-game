import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import TaskView from "@/views/TasksView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TaskView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
