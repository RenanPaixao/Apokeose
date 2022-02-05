<template>
	<div class="container">
		<span/>
		<h3>{{ teamName }}</h3>
		<div class="actionsButtons">
			<img alt="edit time" src="src/assets/edit.png">
			<img alt="delete time" src="src/assets/red-remove.png">
		</div>
	</div>
</template>

<script lang="ts" setup>

const props = defineProps<{
	teamName: string,
	id: number
}>()

</script>

<style lang="scss" scoped>
.container {
	height: 3.75rem;
	font-size: 1.2rem;
	
	display: flex;
	align-items: center;
	padding: 0 0.75rem;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	font-family: $russo;
	
	background-color: $white;
	
	span {
		width: 3px;
		height: 2.5rem;
		
		background-color: $primary;
		margin-right: 0.5rem;
		border-radius: 10%;
	}
	
	.actionsButtons {
		margin: 0 2rem 0 auto;
		
		img {
			height: 1.75rem;
			
			margin: 0 1rem;
			cursor: pointer;
		}
	}
}

</style>