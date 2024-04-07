import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UpcomingTaskView from '@/views/UpcomingTaskView.vue'
import CompletedTaskView from '@/views/CompletedTaskView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/completed', name: 'completed', component: CompletedTaskView},
    {path: '/upcoming', name: 'upcoming', component: UpcomingTaskView},
    {path: '/:catchAll(.*)*', name: 'notFound', component: NotFoundView}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router;