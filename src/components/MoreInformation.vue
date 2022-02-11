<template>
	<div class="more-information-overlay">
		<div class="more-information-card" @click.stop>
			<div class="x-image-container">
				<img class="x-image-container" alt="exit" src="../assets/x-close.png" @click="closeModal"/>
			</div>
			<img :src="sprite" alt="pokemon"/>
			<p class="poke-name">Name: {{ name }}</p>
			<div class="list">
				Abilities:
				<div>
					<span v-for="(ability, index) in abilities">Ability {{ index + 1 }} : {{ ability.ability.name }}</span>
				</div>
			</div>
			<div class="list">
				Stats:
				<div>
					<p v-for="(stat) in stats" class="stats-list">
						<span>{{ stat.stat }}</span>
					</p>
				</div>
			</div>
			<Button class="button-align" @click="closeModal">CLOSE</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Pokemon } from '../interfaces'
import Button from '../components/Button.vue'
import { capitalize } from '../Common/capitalize'
import { idGenerator } from '../Common/idGenerator'


const props = defineProps<{
	pokemon: Pokemon
}>()

const generateId = idGenerator()
const { ...pokemon }: Pokemon = props.pokemon
const emits = defineEmits(['close'])

function closeModal(){
	emits('close')
}

const stats = pokemon.stats.reduce((acum, item) => [...acum, { stat: `${item.stat.name}: ${item.base_stat}` }], [])
const abilities = pokemon.abilities
const type = pokemon.types[0].type.name
const name = capitalize(pokemon.name)
const sprite = pokemon.sprites['official-artwork'].front_default
</script>

<style lang="scss" scoped>
.more-information-overlay {
	@include overlay;
	::-webkit-scrollbar {
		width: 10px;
	}
	
	::-webkit-scrollbar-track {
		background: $white;
		border-radius: 25px;
		margin: 2rem 0;
	}
	
	::-webkit-scrollbar-thumb {
		background: $primary;
		border-radius: 25px;
	}
	.more-information-card {
		width: 40.875rem;
		font-size: 1.2rem;
		
		
		padding: 0 2rem 2rem;
		
		border-radius: 12px;
		background-color: $white;
		font-family: $roboto;
		max-height: 90vh;
		overflow: auto;
		
		.poke-name {
			font-size: 2rem;
			padding-top: 1rem;
			text-align: center;
		}
		img {
			display: block;
			height: 20rem;
			width: 20rem;
			
			margin: 2rem auto 0;
			
		}
		
		.list {
			display: flex;
			align-items: center;
			
			
			div {
				display: flex;
				flex-direction: column;
				padding: 0 2rem;
				
				span {
					padding: 0.5rem 0;
				}
				
				.stats-list {
					display: flex;
					flex-direction: column;
					padding: 0.5rem 0;
				}
			}
		}
		
		.x-image-container {
			margin: 0;
			display: flex;
			justify-content: flex-end;
			width: 100%;
			
			img {
				height: 3rem;
				width: 3rem;
				cursor: pointer;
				margin: 2rem;
			}
		}
	}
	
	.button-align {
		font-size: 1.2rem;
		display: block;
		margin: 3rem auto 0;
	}
	
}
</style>