<template>
	<div v-if="teamSelected" class="container-navigation-menu">
		<img alt="back" class="back-arrow" src="../assets/back-arrow.png" @click="goBack">
		<h2>{{teamSelected.teamName}} <img alt="edit team name" src="../assets/edit.png"></h2>
	</div>
	<div v-else class="container-navigation-menu">
		<h2 class="single-title"> My Teams</h2>
	</div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {computed} from 'vue'
const router = useRouter()
const store = useStore()

const teamSelected = computed(() => store.getters.getTeamSelected)

function goBack() {
	router.back()
}


</script>

<style lang="scss" scoped>
.container-navigation-menu {
	padding: 2.5rem 0;
	font-size: 1.5rem;
	
	display: grid;
	grid-template-columns: 2fr 10fr 2fr;
	font-family: $russo;
	
	.single-title{
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