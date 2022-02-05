import Pokemon from './Pokemon'
export default interface Team {
    id: number,
    teamName: string,
    pokemonsList: Pokemon[]
}