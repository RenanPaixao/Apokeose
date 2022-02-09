<template>
	<div class="container-spacing">
		<button class="create-team-button">CREATE TEAM<img src="../assets/white-plus.png" alt="plus symbol"></button>
		<TeamItem v-for="item in teamList" :teamName="item.teamName" :teamId="item.id" class="item-spacing"/>
	</div>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex'
import TeamItem from '../components/TeamItem.vue'

const store = useStore()
const teamList = store.state.teamsList

</script>

<style lang="scss" scoped>
.container-spacing {
	margin: 4rem 3.75rem 0;
	
	.create-team-button{
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
		
		img{
			height: 1.4rem;
			margin-left: 1rem;
		}
	}
}

.item-spacing {
	margin: 1rem 0;
}

</style>