import axios, { AxiosRequestConfig } from 'axios'

interface ListConfig {
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
	static getPokemon(identificator:string|number){
		return  Http.get(`pokemon/${identificator}`)
	}
	static async getPokemonList({ length, initialValue = 0 }:ListConfig){
		return  Http.get(`pokemon?limit=${length}&offset=${initialValue}`)
	}
}

export default Http
