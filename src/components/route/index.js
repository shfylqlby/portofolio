import { createRouter, createWebHistory } from "vue-router";

// Lazy loading views
const HomeView = () => import('@/components/view/HomeView.vue')
const AboutView = () => import('@/components/view/AboutMeView.vue')
const ContactsView = () => import('@/components/view/ContactsView.vue')
const ProjectView = () => import('@/components/view/ProjectView.vue')

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/project', name: 'Project', component: ProjectView },
  { path: '/about-me', name: 'AboutMe', component: AboutView },
  { path: '/contacts', name: 'Contacts', component: ContactsView },
  { path: '/:pathMatch(.*)*', redirect: '/' } // catch-all 404
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
