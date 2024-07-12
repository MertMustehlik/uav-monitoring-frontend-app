import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DronesView from "@/views/DronesView.vue";
import TasksView from "@/views/TasksView.vue";
import TaskDetails from "@/views/TaskDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/drones',
      name: 'drones',
      component: DronesView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/tasks/:id',
      name: 'taskDetails',
      component: TaskDetails,
      props: true
    }
  ]
})

export default router
