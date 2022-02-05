import { createRouter, createWebHistory } from "vue-router"
import TeamList from './views/TeamList.vue'
import Pokedex from './views/Pokedex.vue'
import NotFound from './views/NotFound.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: TeamList
    },
    {
        path: '/pokedex',
        name: 'Pokedex',
        component: ()=> import('@/views/Pokedex.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: import('@/views/NotFound.vue')
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
