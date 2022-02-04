import { createStore } from 'vuex'

export default createStore({
    state(){
        return {
            pokemons: [],
            teamsList: []
        }
    },
    getters:{},
    actions: {},
    mutations: {
        addTeam(state: any, team:string){
            state.teamsList.push(team)
        }
    }
})