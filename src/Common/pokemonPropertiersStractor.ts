import { Pokemon } from '../interfaces'
import Ability from '../interfaces/pokemon/Ability'
import { capitalize } from '../Common/capitalize'

interface PokemonStracted{
	stats: object[],
	abilities: {
		ability?: Ability,
		is_hidden?: boolean,
		slot?: number
	}[],
	types: string[],
	name: string,
	sprite: string | null
}

export function pokemonPropertiersStractor(pokemon: Pokemon): PokemonStracted{
	const stats = pokemon.stats.reduce((acum: object[], item) => {
		return [...acum, { stat: `${item.stat.name}: ${item.base_stat}` }]
	}, [])
	const abilities = pokemon.abilities
	const types = pokemon.types.map(type => type.type.name)
	const name = capitalize(pokemon.name)
	const sprite = pokemon.sprites.other['official-artwork'].front_default
	
	return { stats, abilities, types, name, sprite }
}