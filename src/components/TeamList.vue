<template>
  <keep-alive>
  <div class="container-spacing">
    <TeamItem v-for="item in teamList" class="item-spacing" :teamName="item"/>
  </div>
  </keep-alive>
</template>

<script lang="ts" setup>
  import { useStore } from 'vuex'
  import TeamItem from '../components/TeamItem.vue'

  const store = useStore()
  const teamList = store.state.teamsList

  const temporary: string[] = ['Team Super Aquatic', 'Team Galaxy', 'The Super Team']
  temporary.forEach(team => {
    store.commit('addTeam', team)
  })
</script>

<style lang="scss" scoped>
  .container-spacing{
    margin-top: 3rem;
  }
  .item-spacing{
    margin: 1rem 3.75rem;
  }

</style>