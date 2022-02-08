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
			teamSelectedId: null,
			isEditting: false
		}
	},
	getters: {
		getTeamSelected(state: State): Team | null{
			if(!state.teamSelectedId){
				return null
			}
			return state.teamsList.find(team => team.id === state.teamSelectedId)
		},
		allTeamIds(state: State): number[]{
			return state.teamsList.map(team => team.id)
		}
	},
	actions: {
		updateEditTeam(context, id: number | null): void{
			if(!id){
				context.commit('selectTeamToShow', null)
				context.commit('selectTeamToEdit', null)
				return
			}
			context.commit('selectTeamToShow', id)
			context.commit('selectTeamToEdit', id)
		},
		updateTeamNameAction(context, payload){
			context.commit('updateTeamNameMutation', payload)
		}
	},
	mutations: {
		selectTeamToShow(state: State, id: number | null){
			state.teamSelectedId = id
		},
		selectTeamToEdit(state: State, id?: number | null){
			state.isEditting = id ? true : false
		},
		updateTeamNameMutation(state, payload){
			const index = state.teamsList.findIndex((e: Team) => e.id === payload.id)
			if(index === -1){
				throw new Error('This team does not exist!')
			}
			state.teamsList[index].teamName = payload.name
		}
	}
})