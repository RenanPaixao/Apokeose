<template>
	<div class="container-spacing">
		<button class="create-team-button" @click="toggleModal">CREATE TEAM<img alt="plus symbol"
		                                                                       src="../assets/white-plus.png"></button>
		<TeamItem v-for="item in teamList" :teamId="item.id" :teamName="item.teamName" class="item-spacing"/>
		<ActionModal v-if="isRenaming" type="rename" @cancel="toggleModal" @rename="createTeam" />
	</div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ActionModal from '../components/ActionModal.vue'
import TeamItem from '../components/TeamItem.vue'
import {ref} from 'vue'

const store = useStore()
const router = useRouter()
const teamList = store.state.teamsList

let isRenaming = ref(false)

function toggleModal(){
	isRenaming.value = !isRenaming.value
}

function createTeam(newTeamName){
	store.dispatch('createTeamAction', newTeamName)
	toggleModal()
}
</script>

<style lang="scss" scoped>
.container-spacing {
	margin: 4rem 3.75rem 0;
	
	.create-team-button {
		font-size: 1.2rem;
		
		display: flex;
		align-items: center;
		position: absolute;
		padding: 1rem 1rem 1rem 1.2rem;
		transform: translateY(-120%);
		
		background-color: $primary-blue;
		font-family: $roboto;
		border-radius: 10px;
		color: $white;
		cursor: pointer;
		border: none;
		
		img {
			height: 1.4rem;
			margin-left: 1rem;
		}
	}
}

.item-spacing {
	margin: 1rem 0;
}

</style>