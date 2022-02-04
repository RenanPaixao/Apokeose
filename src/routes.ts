import { createRouter, createWebHistory } from "vue-router"
import TeamList from './components/TeamList.vue'
import Pokedex from './components/Pokedex.vue'
import NotFound from './components/NotFound.vue'
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
