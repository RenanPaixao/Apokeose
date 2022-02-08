<template>
	<div class="overlay-choose-pokemon">
		<div class="choose-pokemon-container">
			<div class="title-container">
				<h2 class="title-choose"><img alt="pokeball" src="../assets/pokeball.png"/> Choose a pokemon</h2>
				<img alt="exit" class="close-image" src="../assets/x-close.png" @click="closeModal"/>
			</div>
			<PokemonCard v-for="pokemon in tempList" :isEditing="false" :pokemon="pokemon" class="card-spacing"
			             @choosePokemon="choosePokemon"/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import PokemonCard from '../components/PokemonCard.vue'
import tempPoke from '../store/tempPoke'
import {useStore} from 'vuex'

const store = useStore()
const tempList = Array(20).fill(tempPoke)
const emits = defineEmits(['closeChooseModal'])

function closeModal(){
	emits('closeChooseModal')
}

function choosePokemon(pokemon){
	emits('closeChooseModal')
	store.dispatch('addPokemonAction', pokemon)
}
</script>

<style lang="scss" scoped>
.overlay-choose-pokemon {
	@include overlay;
	
	::-webkit-scrollbar {
		width: 10px;
	}
	
	::-webkit-scrollbar-track {
		background: $white;
		border-radius: 25px;
		margin: 1rem 0;
	}
	
	::-webkit-scrollbar-thumb {
		background: $primary;
		border-radius: 25px;
	}
	
	.choose-pokemon-container {
		background-color: $white;
		padding: 1rem 2rem 2rem;
		margin: 0 10%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-gap: 1.2rem;
		justify-content: space-around;
		max-height: 90vh;
		overflow: auto;
		border-radius: 25px;
	}
	
	.card-spacing {
		margin-top: 1rem;
	}
	
	.title-container {
		grid-column: 1 / 5;
		margin: 3rem 1rem 0;
		display: flex;
		justify-content: space-between;
		
		.close-image {
			align-self: center;
			position: relative;
			transform: translateY(-2rem);
			
			cursor: pointer;
		}
		
		.title-choose {
			display: flex;
			align-items: center;
			font-size: 2rem;
			font-family: $russo;
			
			img {
				margin-right: 10px;
			}
		}
	}
	
	
}
</style>