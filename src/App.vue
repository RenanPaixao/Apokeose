<template>
	<div class="default-wrapper">
		<Header/>
		<Menu/>
		<NavigationMenu />
		<router-view></router-view>
	
	</div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Menu from './components/Menu.vue'
import NavigationMenu from './components/NavigationMenu.vue'</script>

<style lang="scss">
.default-wrapper {
	min-height: 100vh;
	background-color: $background-gray;
	
	.list {
		margin: 5rem 3rem 0;
		display: flex;
		justify-content: space-evenly;
	}
}
</style>
