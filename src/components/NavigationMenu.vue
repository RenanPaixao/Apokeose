<template>
		<div v-if="teamSelected" class="container-navigation-menu">
			<img alt="back" class="back-arrow" src="../assets/back-arrow.png" @click="goBack">
			<h2 v-if="!isInDetailsPage">{{ teamSelected.teamName }} <img alt="edit team name" src="../assets/edit.png" @click="toggleModal"></h2>
			<ActionModal v-if="isRenaming" type="rename" @cancel="toggleModal" @rename="renameTeam"/>
		</div>
		<div v-else class="container-navigation-menu">
			<h2 class="single-title"> My Teams</h2>
		</div>
</template>

<script lang="ts" setup>
import ActionModal from '../components/ActionModal.vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const isRenaming = ref(false)
const teamSelected = computed(() => store.getters.getTeamSelected)

function goBack(){
	router.back()
}

function toggleModal(){
	isRenaming.value = !isRenaming.value
}

function renameTeam(name){
	isRenaming.value = !isRenaming.value
	const payload = {
		name,
		id: teamSelected.value.id
	}
	store.dispatch('updateTeamNameAction', payload)
	
}

const isInDetailsPage = computed(() => route.path.includes('details'))


</script>

<style lang="scss" scoped>
.container-navigation-menu {
	padding: 2.5rem 0;
	font-size: 1.5rem;
	
	display: grid;
	grid-template-columns: 2fr 10fr 2fr;
	font-family: $russo;
	
	.single-title {
		grid-column: 2 / 3;
	}
	.back-arrow {
		
		align-self: center;
		margin: 0 auto;
	}
	
	img {
		cursor: pointer;
	}
	
	h2 {
		margin: 0 auto;
		
		img {
			margin-left: 1rem;
		}
	}
	
}
</style>