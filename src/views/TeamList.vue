<template>
	<div class="container-spacing">
		<TeamItem v-for="item in teamList" :teamName="item.teamName" :id="item.id" class="item-spacing"/>
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
	margin-top: 3rem;
}

.item-spacing {
	margin: 1rem 3.75rem;
}

</style>