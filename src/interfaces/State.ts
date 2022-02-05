import Team from './Team'
import Pokemon from './Pokemon'

export default interface State{
    pokemons: Pokemon[],
    teamsList: Team[],
    teamSelected: number | null,
    isEditting: boolean
}