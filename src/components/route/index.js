import { createRouter, createWebHistory } from "vue-router";

// Import views (lazy loading untuk performa yang lebih baik)
const HomeView = () => import('../view/HomeView.vue')
const AboutView = () => import('../view/AboutMeView.vue')
const ContactsView = () => import('../view/ContactsView.vue')
const ProjectView = () => import('../view/ProjectView.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutView
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: ContactsView
 },
  // Catch-all route untuk 404 (redirect ke home untuk sekarang)
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router