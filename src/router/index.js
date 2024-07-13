import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DronesView from "@/views/DronesView.vue";
import TasksView from "@/views/TasksView.vue";
import TaskDetails from "@/views/TaskDetails.vue";
import LoginView from "@/views/LoginView.vue";
import {authCheck} from "@/api/authApi.js";
import {notification} from "ant-design-vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView,  meta: {
        title: 'Login'
      }

    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/drones',
      name: 'drones',
      component: DronesView,
      meta: {
        requiresAuth: true,
        title: 'Drones'
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView,
      meta: {
        requiresAuth: true,
        title: 'Tasks'
      }
    },
    {
      path: '/tasks/:id',
      name: 'taskDetails',
      component: TaskDetails,
      props: true,
      meta: {
        requiresAuth: true,
        title: 'Task Details'
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title + " | Droneqube" || 'Droneqube';

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth){
    const isAuthenticated = await authCheck();
    if (!isAuthenticated?.success){
      localStorage.removeItem('jwtToken')
      next("/auth/login")
    }
    next();
  } else{
    next();
  }
});

export default router
