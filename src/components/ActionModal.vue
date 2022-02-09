<template>
	<div class="overlay-action-modal">
		<div class="container-action-modal">
			<h3>{{ title }}</h3>
			<div v-if="isRename" class="rename">
				<input id="rename-input" type="text" autocomplete="off">
				<button class="cancel" @click="cancel">Cancel</button>
				<button @click="rename">Save</button>
			</div>
			<div v-else>
				<button class="cancel">Cancel</button>
				<button>Save</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
	type: 'rename' | 'delete'
}>()
const emits = defineEmits(['cancel', 'rename'])

const isRename = props.type === 'rename'
const title = computed(() => {
	switch(props.type){
		case 'delete':
			return 'Are You Sure?'
		case 'rename':
			return 'Set New Name'
		default:
			throw new Error('Invalid modal type!')
	}
})

function cancel(){
	emits('cancel')
}
function rename(){
	let inputValue = document.getElementById('rename-input').value
	emits('rename', inputValue)
	inputValue = ''
}

</script>

<style lang="scss" scoped>
.overlay-action-modal {
	@include overlay;
	
	.container-action-modal {
		padding: 3rem;
		display: grid;
		
		border-radius: 25px;
		background-color: $white;
		
		h3 {
			white-space: nowrap;
			margin: 0 auto 1rem;
			font-family: $russo;
		}
		
		.rename {
			display: grid;
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr 1fr;
			grid-column-gap: 1rem;
			grid-row-gap: 2rem;
			
			input {
				padding: 0.5rem 1rem;
				background: #FFFFFF;
				box-shadow: 0 4px 10px rgba(45, 45, 45, 0.25);
				border-radius: 10px;
				
				grid-column: 1 / 3;
			}
			
			
			button {
				font-size: 1rem;
				padding: 0.5rem 1rem;
				border-radius: 10px;
				
				font-family: $russo;
				background-color: #F5F5F5;
				cursor: pointer;
				
			}
			
			button.cancel {
				background-color: $primary;
				color: $white;
			}
		}
	}
}
</style>