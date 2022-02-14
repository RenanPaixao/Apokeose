<template>
	<div v-if="hasResults">
		<div v-if="!isFetching" class="more-information-card" @click.stop>
			<div class="image-background">
				<img :src="pokemon.sprite" alt="pokemon"/>
			</div>
			<p class="poke-name"> {{ pokemon.name }} {{getSurname()}}</p>
			<div class="informations-container">
				<div class="informations-wrapper">
					<ul>
						<li v-for="{statName, statPower} in pokemon.stats" class="stat-item">
							<p class="stat">{{ statName }} <span>{{ statPower }}</span></p>
							<div class="bar" :style="{'width': `${powerBar(statPower)}px`}"></div>
						</li>
					</ul>
					<ul class="abilities">
						<p>Abilities</p>
						<div>
							<li v-for="(ability) in pokemon.abilities" class="ability-item">
								<span>{{ ability }}</span>
							</li>
						</div>
					</ul>
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
import store from '../store'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
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

onBeforeRouteLeave(()=>{
	store.dispatch('setSurnameAction', null)
})
onMounted(async() => {
	try{
		const { data } = await Http.getPokemon(route.params.id)
		pokemon.value = pokemonPropertiesExtractor(data)
		isFetching.value = false
	} catch{
		hasResults.value = false
	}
})

function getSurname(){
	if(store.state.pokemonSelectedSurname){
		return `(${store.state.pokemonSelectedSurname})`
	}
	return ''
}

function powerBar(statBase: number){
	if(!statBase){
		return 0
	}
	return 100+statBase
}

</script>

<style lang="scss" scoped>
.more-information-card {
	font-size: 1.2rem;
	background-color: $background-gray;
	font-family: $russo;
	
	.poke-name {
		font-size: 2rem;
		padding-top: 1rem;
		text-align: center;
	}
	
}

.image-background {
	background-color: $white;
	height: 19.5rem;
	width: 19.5rem;
	border-radius: 50%;
	box-shadow: 0.3rem -0.3rem 0px 20px $black;
	margin: 2rem auto;
	
	img {
		display: block;
		height: 20rem;
		width: 20rem;
		
		margin: 2rem auto 0;
		transform: translateY(12%);
	}
}
.informations-container{
	width: 100%;
	border-radius: 40px 40px 0 0;
	background-color: $white;
}
.informations-wrapper {
	max-width: 1440px;
	min-height: 23vh;
	margin: 1.5rem auto 0;
	padding: 3rem 0;
	
	
	display: flex;
	justify-content: space-around;
	
	div {
		margin: auto 0;
	}
	
	ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.stat-item {
		display: flex;
		align-items: center;
		height: 2.9rem;
		
		.bar {
			height: 15px;
			
			margin: 2rem;
			
			border-radius: 12px;
			transform: translateY(3px);
			
			background-color: brown;
		}
	}
	
	.abilities {
		display: flex;
		align-items: center;
		flex-direction: row;
		
		p {
			margin-right: 5rem;
			color: $low-title;
		}
		
		.ability-item {
			margin: 1rem;
		}
		
	}
	
	.stat {
		color: $low-title;
		display: flex;
		min-width: 250px;
		
		span {
			display: block;
			margin: 0.5rem 0 0 auto;
			color: $black;
		}
		
	}
}

.no-results {
	text-align: center;
}
</style>