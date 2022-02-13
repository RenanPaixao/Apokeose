import Ability from './pokemon/Ability'
import GameIndex from './pokemon/GameIndex'
import HeldItem from './pokemon/HeldItem'
import Move from './pokemon/Move'
import Sprites from './pokemon/Sprites'
export interface Pokemon{
	abilities: {
		ability: Ability,
		is_hidden: boolean,
		slot: number
	}[],
	base_experience: number,
	forms: {name: string, url: string}[],
	game_indices: GameIndex[],
	height: number,
	held_items: HeldItem[],
	id: number,
	is_default: boolean,
	location_area_encounters: string,
	moves: Move[],
	name: string,
	order: number,
	past_types: [],
	species: { name: string, url: string },
	sprites: Sprites,
	stats: {
		base_stat: number,
		effort: number,
		stat: {
			name: string,
			url: string
		}
	}[],
	types: {
		slot: number,
		type:{
			name: string,
			url: string
		}
	}[],
	surname?: string,
	weight: number
}

export interface Team{
	id: number,
	teamName: string,
	pokemonsList: Pokemon[]
}

export default interface State{
	pokemonsList: Pokemon[]
	teamsList: Team[],
	teamSelectedId: number | null,
	isEditting: boolean
}