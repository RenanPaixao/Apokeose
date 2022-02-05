import {createStore} from 'vuex'
import State from '../interfaces/State'
import ditto from './tempPoke'

export default createStore({
    state():State {
        return {
            pokemons: [ditto],
            teamsList: [
                {id: 1, teamName: 'Team Super Aquatic', pokemonsList: [ditto, ditto, ditto]},
                {id: 2, teamName: 'Team Galaxy'},
                {id: 3, teamName: 'The Super Team'}
            ],
            selectToShowTeam: null,
            selectToEditTeam: null,
        }
    },
    getters: {},
    actions: {
        editTeam(context){
            console.log(context)
            context.commit('selectTeamToShow')
            context.commit('selectTeamToEdit')
        }
    },
    mutations: {
        selectTeamToShow(state:State, id:number){
            state.selectToShowTeam = id
        },
        selectTeamToEdit(state:State, id:number){
            state.selectToEditTeam = id
        }
    }
})