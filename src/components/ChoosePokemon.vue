<template>
	<div class="overlay-choose-pokemon">
		<div class="choose-pokemon-container">
			<div class="title-container">
				<h2 class="title-choose"><img alt="pokeball" src="../assets/pokeball.png"/> Choose a pokemon</h2>
				<img alt="exit" class="close-image" src="../assets/x-close.png" @click="closeModal"/>
			</div>
			<div :key="isFetching" class="pokemon-cards-container">
				<PokemonCard v-for="pokemon in chooseList" :isEditing="false" :pokemon="pokemon"
				             class="card-spacing"
				             @choosePokemon="choosePokemon"/>
			</div>
			<div class="navigation">
				<img src="../assets/arrow-navigation-left.svg" alt="previous page" @click="previousPage">
				<p>{{ pagination.pageCount }}</p>
				<img src="../assets/arrow-navigation-right.svg" alt="next page" @click="nextPage">
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import PokemonCard from '../components/PokemonCard.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import Http from '../services/Api'

const store = useStore()
const chooseList = ref([])
const pagination = ref({ pageCount: 1, initialValue: 0 })
const isFetching = ref(false)
const emits = defineEmits(['closeChooseModal'])

onMounted(async() => {
	isFetching.value = true
	chooseList.value = await Http.getPokemonList({ length: 20 })
	isFetching.value = false
})

function closeModal(){
	emits('closeChooseModal')
}

function choosePokemon(pokemon){
	emits('closeChooseModal')
	store.dispatch('addPokemonAction', { ...pokemon })
}

async function previousPage(){
	if(pagination.value.pageCount === 1 || isFetching.value){
		return
	}
	
	isFetching.value = true
	pagination.value.initialValue -= 20
	pagination.value.pageCount -= 1
	chooseList.value = await Http.getPokemonList({ length: 20, initialValue: pagination.value.initialValue })
	isFetching.value = false
}

async function nextPage(){
	if(pagination.value.pageCount === 56 || isFetching.value ){
		return
	}
	isFetching.value = true
	pagination.value.initialValue += 20
	pagination.value.pageCount++
	chooseList.value = await Http.getPokemonList({ length: 20, initialValue: pagination.value.initialValue })
	isFetching.value = false
}
</script>

<style lang="scss" scoped>
.overlay-choose-pokemon {
	@include overlay;
	
	::-webkit-scrollbar {
		width: 10px;
	}
	
	::-webkit-scrollbar-track {
		background: rgba(0, 0, 0, 0);
		border-radius: 25px;
		margin: 2rem 0;
	}
	
	::-webkit-scrollbar-thumb {
		background: $primary;
		border-radius: 25px;
	}
	
	.choose-pokemon-container {
		background-color: $white;
		padding: 1rem 2rem 1.5rem;
		margin: 0 10%;
		justify-content: space-around;
		max-height: 90vh;
		width: 57rem;
		overflow: auto;
		border-radius: 25px;
	}
	
	.navigation {
		grid-column: 1 / 5;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1rem;
		
		img {
			height: 3rem;
			width: 3rem;
			cursor: pointer;
		}
		
		p {
			font-family: $russo;
		}
	}
	
	.pokemon-cards-container {
		grid-gap: 1.2rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(5, 1fr);
		
		.card-spacing {
			margin-top: 1rem;
			padding-right: 2rem;
			padding-left: 1rem;
		}
	}
	
	.title-container {
		grid-column: 1 / 5;
		margin: 3rem 0;
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