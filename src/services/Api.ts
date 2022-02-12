import axios, { AxiosRequestConfig } from 'axios'
import { Pokemon } from '../interfaces'

interface ListConfig{
	length: number,
	initialValue: number
}

class Http{
	static service = axios.create({
		baseURL: 'https://pokeapi.co/api/v2/',
		timeout: 2000
	})
	
	static get(resource: string, config?: AxiosRequestConfig){
		return Http.service.get(resource, config)
	}
	
	static getPokemon(identificator: string | number){
		return Http.get(`pokemon/${identificator}`)
	}
	
	static async getPokemonList({ length, initialValue = 0 }: ListConfig){
		const { data } = await Http.get(`pokemon?limit=${length}&offset=${initialValue}`)
		const pokeList = Promise.all( await data.results.map(async (e:{name:string, url: string}) => {
				const {data} =  await Http.getPokemon(e.name)
				return data
		}))
		
		return await pokeList
	}
}

export default Http
