<template>
	<div v-if="hasResults">
		<div v-if="!isFetching" class="more-information-card" @click.stop>
			<img :src="pokemon.sprite" alt="pokemon"/>
			<p class="poke-name">Name: {{ pokemon.name }}</p>
			<div class="list">
				Abilities:
				<div>
					<span v-for="(ability, index) in pokemon.abilities">Ability {{ index + 1 }} : {{
							ability.ability.name
						}}</span>
				</div>
			</div>
			<div class="list">
				Stats:
				<div>
					<p v-for="(stat) in pokemon.stats" class="stats-list">
						<span>{{ stat.stat }}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div v-else>
		<h1 class="no-results">No results!</h1>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { idGenerator } from '../Common/idGenerator'
import { useRoute, useRouter } from 'vue-router'
import { pokemonPropertiesExtractor } from '../Common/pokemonPropertiersStractor'
import Http from '../services/Api'

const route = useRoute()
const router = useRouter()
const isFetching = ref(true)
const hasResults = ref(true)
const pokemon = ref({
	name: '',
	sprite: '',
	types: '',
	abilities: [],
	stats: []
})
const generateId = idGenerator()


onMounted(async() => {
	try{
		const { data } = await Http.getPokemon(route.params.id)
		pokemon.value = pokemonPropertiesExtractor(data)
		isFetching.value = false
	} catch{
		hasResults.value = false
	}
})

</script>

<style lang="scss" scoped>
.more-information-card {
	@include scrollBar;
	
	font-size: 1.2rem;
	
	padding: 0 2rem 2rem;
	
	background-color: $white;
	font-family: $roboto;
	
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
}

.no-results {
	text-align: center;
}
</style>