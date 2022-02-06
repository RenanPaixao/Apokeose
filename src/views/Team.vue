<template>
	<div class="container-team">
		<div v-for="pokemon in list">
			<PokemonCard v-if="pokemon" :pokemon="pokemon"/>
			<AddPokemon v-else/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import PokemonCard from '../components/PokemonCard.vue'
import AddPokemon from '../components/AddPokemon.vue'

const store = useStore()
const list = computed(() => {
		const { pokemonsList } = store.getters.getTeamSelected
		const addPokemonArray = Array(4)
		return [...pokemonsList, ...addPokemonArray].slice(0, 4)
	}
)
</script>

<style lang="scss" scoped>
.container-team {
	margin-top: 3rem;
	display: flex;
	justify-content: space-around;
}
</style>