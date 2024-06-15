import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import TaskView from "@/views/TasksView.vue";
import FriendsView from "@/views/FriendsView.vue";
import BoostsView from "@/views/BoostsView.vue";

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
  },
  {
    path: '/frens',
    name: 'frens',
    component: FriendsView
  },
  {
    path: '/boosts',
    name: 'boosts',
    component: BoostsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
