import { createStore } from 'vuex'
import State, { Pokemon, Team } from '../interfaces'
import ditto from './tempPoke'

export default createStore({
	state(): State{
		return {
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
		getTeamSelected(state: State): Team | void{
			if(!state.teamSelectedId){
				return
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
		},
		addPokemonAction({ commit }, pokemon){
			commit('addPokemonMutation', pokemon)
		},
		removePokemonAction({commit, getters}, pokemonId){
			const index = getters.getTeamSelected.pokemonsList.findIndex((e:Pokemon) => e.id === pokemonId)
			commit('removePokemonMutation', index)
		}
	},
	mutations: {
		selectTeamToShow(state: State, id: number | null){
			state.teamSelectedId = id
		},
		selectTeamToEdit(state: State, id?: number | null){
			state.isEditting = id ? true : false
		},
		updateTeamNameMutation(state: State, payload){
			const index = state.teamsList.findIndex((e: Team) => e.id === payload.id)
			if(index === -1){
				throw new Error('This team does not exist!')
			}
			
			state.teamsList[index].teamName = payload.name
		},
		addPokemonMutation({ teamsList, teamSelectedId }: State, pokemon: Pokemon){
			const index = teamsList.findIndex((e: Team) => e.id === teamSelectedId)
			if(index === -1){
				throw new Error('Ocurred a error with select team. Try again!')
			}
			teamsList[index].pokemonsList.push(pokemon)
		},
		removePokemonMutation({teamsList, teamSelectedId}, pokemonIndex:number){
			const index = teamsList.findIndex((e: Team) => e.id === teamSelectedId)
			teamsList[index].pokemonsList.splice(pokemonIndex, 1)
		}
	}
})