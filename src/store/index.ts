import { createStore } from 'vuex'
import State, { Pokemon, Team } from '../interfaces'
import ditto from './tempPoke'
import { generateId } from '../Common/idGenerator'

export default createStore({
	state(): State{
		return {
			teamsList: [
				{
					id: generateId.next().value as number,
					teamName: 'Team Super Aquatic',
					pokemonsList: [{ ...ditto }, { ...ditto }, { ...ditto }]
				},
				{ id: generateId.next().value as number, teamName: 'Team Galaxy', pokemonsList: [{ ...ditto }] },
				{ id: generateId.next().value as number, teamName: 'The Super Team', pokemonsList: [] }
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
		removePokemonAction({ commit, getters }, pokemonIndex){
			commit('removePokemonMutation', pokemonIndex)
		},
		renamePokemonAction({
			                    commit,
			                    state
		                    }, pokemonInformation: { pokemonId: number, pokemonIndex: number, newSurname: string }){
			const teamIndex = state.teamsList.findIndex((e: Team) => e.id === state.teamSelectedId)
			commit('renamePokemonMutation', { teamIndex, ...pokemonInformation })
		},
		removeTeamAction({ commit }, teamId){
			commit('removeTeamMutation', teamId)
		},
		createTeamAction({ commit }, teamName){
			commit('createTeamMutation', teamName)
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
		removePokemonMutation({ teamsList, teamSelectedId }, pokemonIndex: number){
			const index = teamsList.findIndex((e: Team) => e.id === teamSelectedId)
			teamsList[index].pokemonsList.splice(pokemonIndex, 1)
		},
		renamePokemonMutation({ teamsList, teamSelectedId }, { teamIndex, pokemonIndex, newSurname }){
			teamsList[teamIndex].pokemonsList[pokemonIndex].surname = newSurname
		},
		removeTeamMutation({ teamsList }, teamId){
			const index = teamsList.findIndex((e) => e.id === teamId)
			teamsList.splice(index, 1)
		},
		createTeamMutation({ teamsList }: State, teamName){
			teamsList.push({ id: generateId.next().value as number, teamName: teamName, pokemonsList: [] })
		}
	}
})