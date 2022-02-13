import { Pokemon } from '../interfaces'
import Ability from '../interfaces/pokemon/Ability'
import { capitalize } from '../Common/capitalize'

interface PokemonStracted{
	stats: object[],
	abilities: {
		ability: Ability,
		is_hidden: boolean,
		slot: number
	}[],
	types: string,
	name: string,
	sprite: string | null,
	id: number,
	surname?: string
}

interface Types{
	slot: number,
	type: {
		name: string,
		url: string
	}
}

export function pokemonPropertiesExtractor(pokemon: Pokemon): PokemonStracted{
	const stats = pokemon.stats.reduce((acum: object[], item) => {
		return [...acum, { statName: item.stat.name, statPower: item.base_stat }]
	}, [])
			// @ts-ignore
	const abilities = pokemon.abilities.map(e => e.ability.name)
	const types = pokemon.types.reduce((acum: any, types) => {
		if(!acum){
			return types.type.name
		}
		return acum + ' | ' + types.type.name
		
	}, '')
	const name = capitalize(pokemon.name)
	const sprite = pokemon.sprites.other['official-artwork'].front_default
	const id = pokemon.id
	const surname = pokemon.surname
	
	return { stats, abilities, types, name, sprite, id, surname }
}