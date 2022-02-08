export interface Pokemon{
	abilities: object[],
	id: number,
	name: string,
	types: object[],
	surname?: string,
	sprites: object
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