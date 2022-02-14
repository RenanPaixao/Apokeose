import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import {onMounted} from 'vue'
import TeamList from './views/TeamList.vue'
import Team from './views/Team.vue'
import Http from './services/Api'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: TeamList,
		beforeEnter(){
			store.dispatch('updateEditTeam', null)
		}
		
	},
	{
		path: '/team/:id',
		name: 'Team',
		component: Team,
		beforeEnter(to:any, from:any){
			const isValidId = store.getters.allTeamIds.find((id: number) => id === parseInt(to.params.id)
			)
			if(!isValidId){
				return { name: 'NotFound' }
			}
		}
	},
	{
		path: '/details/:id',
		name: 'Details',
		component: () => import('@/views/Details.vue')
	},
	{
		path: '/pokedex',
		name: 'Pokedex',
		component: () => import('@/views/Pokedex.vue')
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue')
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
