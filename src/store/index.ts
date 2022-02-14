import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'
import State, { Pokemon, Team } from '../interfaces'
import ditto from './tempPoke'
import { idGenerator } from '../Common/idGenerator'
import Http from '../services/Api'

const localStorageData = JSON.parse(<any>localStorage.getItem('vuex'))
const generateId = idGenerator(localStorageData?.teamsList.reduce((acum: number, team:Team)=> {
	return team.id > acum ? team.id + 1 : acum
	}, 0)
)

export default createStore({
	state(): State{
		return {
			pokemonsList: [],
			teamsList: [],
			teamSelectedId: null,
			isEditting: false,
			pokemonSelectedSurname: null
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
		},
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
		setSurnameAction({commit}, surname:string){
			commit('setSurnameMutation', surname)
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
		setSurnameMutation(state:State, surname){
			state.pokemonSelectedSurname = surname
		},
		removeTeamMutation({ teamsList }, teamId){
			const index = teamsList.findIndex((e) => e.id === teamId)
			teamsList.splice(index, 1)
		},
		createTeamMutation({ teamsList }: State, teamName){
			teamsList.unshift({ id: generateId.next().value as number, teamName: teamName, pokemonsList: [] })
		}
	},
	plugins: [
		new VuexPersist({
			storage: window.localStorage
		}).plugin
	]
})