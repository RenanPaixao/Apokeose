<template>
  <div class="default-wrapper">
    <Header/>
    <Menu/>
    <NavigationMenu teamName="Team Super Aquatic"/>
    <div class="list">
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
      <AddPokemon/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue'
  import PokemonCard from './components/PokemonCard.vue'
  import Menu from './components/Menu.vue'
  import AddPokemon from './components/AddPokemon.vue'
  import NavigationMenu from './components/NavigationMenu.vue'
</script>

<style lang="scss" scoped>
  .default-wrapper{
    min-height: 100vh;
    background-color: $background-gray;
    .list{
      margin: 5rem 3rem 0;
      display: flex;
      justify-content: space-evenly;
    }
  }
</style>
