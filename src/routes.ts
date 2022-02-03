import { createRouter, createWebHistory } from "vue-router"
import TeamList from './components/TeamList.vue'
import Pokedex from './components/Pokedex.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TeamList
    },
    {
        path: '/team/:id',
        name: 'Team',
        component: TeamList
    },
    {
        path: '/pokedex',
        name: 'Pokedex',
        component: Pokedex
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
