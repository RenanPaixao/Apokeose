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
        component: Pokedex
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})
