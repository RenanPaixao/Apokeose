<template>
	<div :key="key" class="container-team">
		<div v-for="(pokemon, index) in list">
			<PokemonCard v-if="pokemon" :pokemon="pokemon" :pokemonIndex="index" isEditing @removePokemon="removePokemon"
			             @renamePokemon="listReRender"/>
			<AddPokemon v-else @click="toggleIsChoosing"/>
		</div>
		<div v-if="isChoosing">
			<ChoosePokemon @closeChooseModal="toggleIsChoosing"></ChoosePokemon>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import PokemonCard from '../components/PokemonCard.vue'
import AddPokemon from '../components/AddPokemon.vue'
import ChoosePokemon from '../components/ChoosePokemon.vue'


const store = useStore()
const router = useRouter()
let key = ref(false)
let isChoosing = ref(false)
const list = computed(() => {
		const pokemonsList = store.getters.getTeamSelected?.pokemonsList
		if(!pokemonsList){
			return
		}
		const addPokemonArray = Array(4)
		return [...pokemonsList, ...addPokemonArray].slice(0, 4)
	}
)

function toggleIsChoosing(){
	isChoosing.value = !isChoosing.value
}

function removePokemon(pokemonIndex: number){
	store.dispatch('removePokemonAction', pokemonIndex)
	listReRender()
}

function listReRender(){
	key.value = !key.value
}
</script>

<style lang="scss" scoped>
.container-team {
	margin-top: 3rem;
	display: flex;
	justify-content: space-around;
}
</style>