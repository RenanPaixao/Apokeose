<template>
	<div class="container" :class="dynamicClasses.shrinkContainer" @click="choosePokemon">
		<div>
			<img :src="sprite" alt="Pokemon" class="pokemon-image" :class="dynamicClasses.centralizeImage"/>
			<img v-if="isEditing" alt="remove" class="remove-icon" src="../assets/gray-remove.png" @click="removePokemon">
		</div>
		<p>Name: <span>{{ capitalize(name) }}</span></p>
		<p v-if="isEditing" @click="toggleRenameModal">Surname: <span>{{ surname }}</span><img alt="edit" src="../assets/edit.png"></p>
		<p class="type">Type:<span>{{ type.name }}</span></p>
		<ActionModal v-if="isRenaming" type="rename" @rename="renamePokemon" @cancel="toggleRenameModal"/>
		
	</div>
</template>

<script lang="ts" setup>
import {Pokemon} from '../interfaces'
import {useStore} from 'vuex'
import {ref} from 'vue'
import ActionModal from '../components/ActionModal.vue'

const props = defineProps<{ pokemon: Pokemon, pokemonIndex?:number, isEditing?: boolean }>()
const emits = defineEmits(['renamePokemon', 'choosePokemon', 'removePokemon', 'renamePokemon'])
const store = useStore()

const { name, surname, sprites, types } = props.pokemon
const { type } = types[0]
const sprite = sprites['official-artwork'].front_default

const isRenaming = ref(false)

function capitalize(value: string):string{
	return [value.charAt(0).toUpperCase(), ...value.split('').slice(1)].join('')
}

const dynamicClasses = {
	centralizeImage: props.isEditing ? '' : 'is-choosing-image',
	shrinkContainer: props.isEditing ? '' : 'is-choosing-container'
}

function choosePokemon(){
	if(props.isEditing){
		return
	}
	emits('choosePokemon', props.pokemon)
}
function toggleRenameModal(){
	isRenaming.value = !isRenaming.value
}
function removePokemon(){
	emits('removePokemon', props.pokemonIndex)
}
function renamePokemon(newPokemonSurname: string){
	const pokemonInformations:{pokemonId: number, newSurname:string} = {
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
.is-choosing-image{
	margin: 0 auto 1rem !important;
}
.is-choosing-container{
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
