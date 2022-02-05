import {createStore} from 'vuex'
import {State, Team} from '../interfaces/State'
import ditto from './tempPoke'

export default createStore({
    state():State {
        return {
            pokemons: [ditto],
            teamsList: [
                {id: 1, teamName: 'Team Super Aquatic', pokemonsList: [ditto, ditto, ditto]},
                {id: 2, teamName: 'Team Galaxy', pokemonsList: [ditto]},
                {id: 3, teamName: 'The Super Team', pokemonsList: []}
            ],
            teamSelected: null,
            isEditting: false,
        }
    },
    getters: {
        getTeamSelected(state:State): Team | null{
            if (!state.teamSelected){
                return null
            }
            return state.teamsList.find(team => team.id === teamSelected )
        },
        allTeamIds(state:State):number[]{
            return state.teamsList.map(team => team.id)
        }
    },
    actions: {
        editTeam(context, id:number){
            console.log(context)
            context.commit('selectTeamToShow', id)
            context.commit('selectTeamToEdit')
        }
    },
    mutations: {
        selectTeamToShow(state:State, id:number){
            state.teamSelected = id
        },
        selectTeamToEdit(state:State){
            state.isEditting = !state.isEditting
        }
    }
})