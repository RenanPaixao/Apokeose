<template>
	<div :class="dynamicClasses.shrinkContainer" class="container" @click="handleCardClick">
		<div>
			<ActionModal v-if="isRenaming" type="rename" @cancel="toggleRenameModal" @rename="renamePokemon"/>
			<img :class="dynamicClasses.centralizeImage" :src="pokeExtracted.sprite" alt="Pokemon" class="pokemon-image"/>
			<img v-if="isEditing" alt="remove" class="remove-icon" src="../assets/gray-remove.png"
			     @click.stop="removePokemon">
		</div>
		<p v-if="!isShowingButtons">Name: <span>{{ pokeExtracted.name }}</span></p>
		<p v-if="isEditing">Surname:<span class="surname">{{ pokeExtracted.surname }}</span>
			<img alt="edit" src="../assets/edit.png" @click.stop="toggleRenameModal">
		</p>
		<p v-if="!isShowingButtons" class="type">Type:<span>{{ pokeExtracted.types }}</span></p>
		<div v-if="isShowingButtons" class="buttons-container">
			<Button class="choose-button" @click="choosePokemon">Choose</Button>
			<Button class="details-button" @click="goToDetails">Details...</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { Pokemon } from '../interfaces'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import ActionModal from '../components/ActionModal.vue'
import Button from '../components/Button.vue'
import { pokemonPropertiesExtractor } from '../Common/pokemonPropertiersStractor'

const props = defineProps<{ pokemon: Pokemon, pokemonIndex?: number, isEditing?: boolean }>()
const emits = defineEmits(['renamePokemon', 'choosePokemon', 'removePokemon', 'renamePokemon', 'showingInformation'])
const store = useStore()
const router = useRouter()

const isShowingButtons = ref(false)
const isRenaming = ref(false)
const pokeExtracted = ref({})

onBeforeMount(() => {
	pokeExtracted.value = pokemonPropertiesExtractor(props.pokemon)
})

const dynamicClasses = {
	centralizeImage: props.isEditing ? '' : 'is-choosing-image',
	shrinkContainer: props.isEditing ? '' : 'is-choosing-container'
}

function handleCardClick(){
	//if click in a card while renaming, the route to details will be activated
	const showInformations = !isRenaming.value
	
	if(props.isEditing && showInformations){
		store.dispatch('setSurnameAction', props.pokemon?.surname ?? null)
		goToDetails()
		return
	}
	if(!isRenaming.value){
		isShowingButtons.value = !isShowingButtons.value
	}
}


function removePokemon(){
	emits('removePokemon', props.pokemonIndex)
}

function choosePokemon(){
	isShowingButtons.value = false
	emits('choosePokemon', props.pokemon)
}

function goToDetails(){
	router.push({ name: 'Details', params: { id: props.pokemon.id } })
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
	width: 6rem !important;
	height: 6rem !important;
	margin: 0 1rem 1rem auto !important;
	
}

.is-choosing-container {
	width: 10rem !important;
	height: 11rem !important;
	
	.buttons-container {
		height: 2.6rem;
		.choose-button{
			margin: 0 0.3rem 0 0;
		}
		
		button.details-button {
			background-color: $primary;
		}
	}
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
	cursor: pointer;
	overflow: hidden;
	
	div {
		display: flex;
		align-items: center;
		
		.pokemon-image {
			height: 7rem;
			width: 7rem;
			
			margin: 0 .5rem 0 auto;
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
		white-space: nowrap;
		
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
		max-width: 7ch;
		text-overflow: clip;
		overflow: hidden;
	}
	
	p.type {
		font-family: $roboto;
		font-weight: 400;
		
		span {
			color: $primary-blue;
			white-space: nowrap;
		}
	}
}
</style>
