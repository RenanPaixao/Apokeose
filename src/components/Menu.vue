<template>
  <div>
    <h2> <img alt="Profile" src="../assets/group-avatar.png"> Hello {{username}}!!</h2>
    <p>My Teams</p>
    <p>Pokedex</p>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const username = ref('Everton')
</script>

<style lang="scss" scoped>
  div{
    display: flex;
    padding: 1rem 0;

    white-space: nowrap;
    background-color: $white;
    color: $title-black;


    h2{
      display: flex;
      font-family: $roboto;
      font-weight: 500;
      font-size: 2.25rem;
      margin: 0 auto 0 3rem;

      img{
        margin-right: 0.5rem;
      }

    }
    p{
      font-family: $play;
      margin: 0 2rem 0 1rem;
      font-size: 2.25rem;
      font-weight: lighter;
    }
  }
</style>