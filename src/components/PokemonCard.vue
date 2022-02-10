<template>
	<div :class="dynamicClasses.shrinkContainer" class="container" @click="handleCardClick">
		<div>
			<img :class="dynamicClasses.centralizeImage" :src="sprite" alt="Pokemon" class="pokemon-image"/>
			<img v-if="isEditing" alt="remove" class="remove-icon" src="../assets/gray-remove.png" @click="removePokemon">
		</div>
		<p>Name: <span>{{ nameCapitalized }}</span></p>
		<p v-if="isEditing">Surname:<span class="surname" @click.stop="toggleRenameModal">{{ surname }}</span>
			<img alt="edit" src="../assets/edit.png">
		</p>
		<p class="type">Type:<span>{{ type }}</span></p>
		<ActionModal v-if="isRenaming" type="rename" @cancel="toggleRenameModal" @rename="renamePokemon"/>
		<MoreInformation v-if="isShowingInformations" :pokemon="pokemon"/>
	</div>
</template>

<script lang="ts" setup>
import MoreInformation from './MoreInformation.vue'
import { Pokemon } from '../interfaces'
import { capitalize } from '../Common/capitalize'
import { useStore } from 'vuex'
import { ref } from 'vue'
import ActionModal from '../components/ActionModal.vue'

const props = defineProps<{ pokemon: Pokemon, pokemonIndex?: number, isEditing?: boolean }>()
const emits = defineEmits(['renamePokemon', 'choosePokemon', 'removePokemon', 'renamePokemon', 'showingInformation'])
const store = useStore()

const { name, surname, sprites, types } = props.pokemon
const type = types[0].type.name
const nameCapitalized = capitalize(name)
const sprite = sprites['official-artwork'].front_default

const isRenaming = ref(false)
const isShowingInformations = ref(false)

const dynamicClasses = {
	centralizeImage: props.isEditing ? '' : 'is-choosing-image',
	shrinkContainer: props.isEditing ? '' : 'is-choosing-container'
}

function handleCardClick(){
	if(props.isEditing){
		toggleShowingInformations()
		return
	}
	emits('choosePokemon', props.pokemon)
}

function toggleShowingInformations(){
	isShowingInformations.value = !isShowingInformations.value
}

function removePokemon(){
	emits('removePokemon', props.pokemonIndex)
}

function toggleRenameModal(){
	isRenaming.value = !isRenaming.value
}

function renamePokemon(newPokemonSurname: string){
	const pokemonInformations: { pokemonId: number, newSurname: string } = {
		pokemonId: props.pokemon.id,
		pokemonIndex: props.pokemonIndex,
		newSurname: newPokemonSurname
	}
	store.dispatch('renamePokemonAction', pokemonInformations)
	
	emits('renamePokemon')
	toggleRenameModal()
}

</script>

<style lang="scss" scoped>
.is-choosing-image {
	margin: 0 auto 1rem !important;
}

.is-choosing-container {
	width: 10rem !important;
	height: 10rem !important;
	cursor: pointer;
}

.container {
	width: 11.875rem;
	height: 12rem;
	
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding-bottom: 1.5rem;
	
	background-color: $white;
	border-radius: 8px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
	
	div {
		display: flex;
		align-items: center;
		
		.pokemon-image {
			height: 5rem;
			width: 5rem;
			
			margin: 0 1.5rem 0 auto;
		}
		
		.remove-icon {
			height: 1rem;
			width: 1rem;
			margin: 0 1rem 6rem 0;
			
			cursor: pointer;
		}
	}
	
	p {
		height: 1rem;
		font-size: 1rem;
		font-weight: bold;
		
		display: flex;
		margin: 0.3rem 0 0 1.88rem;
		color: $primary;
		font-family: $play;
		
		img {
			height: 1rem;
			width: 1rem;
			
			cursor: pointer;
		}
	}
	
	span {
		color: $title-black;
		margin: 0 0.3rem;
	}
		.surname {
			cursor: pointer;
		}
	
	p.type {
		font-family: $roboto;
		font-weight: 400;
		
		span {
			color: $primary-blue;
			margin-left: 0.3rem;
		}
	}
}
</style>
