export interface Pokemon{
	abilities: object[],
	id: number,
	name: string,
	types: object[],
	surname?: string,
	sprites: object,
	stats: object[],
	weight: number,
	height: number
}

export interface Team{
	id: number,
	teamName: string,
	pokemonsList: Pokemon[]
}

export default interface State{
	teamsList: Team[],
	teamSelectedId: number | null,
	isEditting: boolean
}