import axios, { AxiosRequestConfig } from 'axios'

interface ListConfig {
	length: number,
	initialValue: number
}

class Http{
	static service = axios.create({
		baseURL: process.env.VITE_BASE_URL,
		timeout: 2000
	})
	
	static async get(resource: string, config?: AxiosRequestConfig){
		return await Http.service(resource, config)
	}
	static async getPokemon(identificator:string|number){
		return await Http.get(`/pokemon/${identificator}`)
	}
	static async getPokemonList({ length, initialValue = 0 }:ListConfig){
		return await Http.get(`pokemon?limit=${length}&offset=${initialValue}`)
	}
}

export default Http
