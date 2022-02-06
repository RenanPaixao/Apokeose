import { createStore } from 'vuex'
import { State, Team } from '../interfaces/State'
import ditto from './tempPoke'

export default createStore({
	state(): State{
		return {
			pokemons: [ditto],
			teamsList: [
				{ id: 1, teamName: 'Team Super Aquatic', pokemonsList: [ditto, ditto, ditto] },
				{ id: 2, teamName: 'Team Galaxy', pokemonsList: [ditto] },
				{ id: 3, teamName: 'The Super Team', pokemonsList: [] }
			],
			teamSelected: null,
			isEditting: false
		}
	},
	getters: {
		getTeamSelected(state: State): Team | null{
			if(!state.teamSelected){
				return null
			}
			return state.teamsList.find(team => team.id === state.teamSelected)
		},
		allTeamIds(state: State): number[]{
			return state.teamsList.map(team => team.id)
		}
	},
	actions: {
		updateEditTeam(context, id: number | null):void{
			if(!id){
				context.commit('selectTeamToShow', null)
				context.commit('selectTeamToEdit', null)
				return
			}
			context.commit('selectTeamToShow', id)
			context.commit('selectTeamToEdit', id)
		}
	},
	mutations: {
		selectTeamToShow(state: State, id: number | null){
			state.teamSelected = id
		},
		selectTeamToEdit(state: State, id?: number | null){
			state.isEditting = id ? true : false
		}
	}
})