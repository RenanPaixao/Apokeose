export default {
	abilities: [
		{
			'ability': {
				'name': 'limber',
				'url': 'https://pokeapi.co/api/v2/ability/7/'
			},
			'is_hidden': false,
			'slot': 1
		},
		{
			'ability': {
				'name': 'imposter',
				'url': 'https://pokeapi.co/api/v2/ability/150/'
			},
			'is_hidden': true,
			'slot': 3
		}
	],
	id: 132,
	name: 'ditto',
	height: 3,
	weight: 40,
	types: [
		{
			'slot': 1,
			'type': {
				'name': 'normal',
				'url': 'https://pokeapi.co/api/v2/type/1/'
			}
		}
	],
	sprites: {
		'official-artwork': {
			front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
		}
	},
	stats: [
		{
			base_stat: 48,
			effort: 1,
			stat: {
				name: "hp",
				url: "https://pokeapi.co/api/v2/stat/1/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "attack",
				url: "https://pokeapi.co/api/v2/stat/2/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "defense",
				url: "https://pokeapi.co/api/v2/stat/3/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "special-attack",
				url: "https://pokeapi.co/api/v2/stat/4/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "special-defense",
				url: "https://pokeapi.co/api/v2/stat/5/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "speed",
				url: "https://pokeapi.co/api/v2/stat/6/"
			}
		}
	]
}