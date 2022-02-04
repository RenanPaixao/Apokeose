<template>
  <div class="menu-container">
    <h2> <img alt="Profile" src="../assets/group-avatar.png"> Hello {{username}}!!</h2>
    <router-link to="/" exact>
      <p>
        My Teams
        <div class="link-active-menu"/>
      </p>
    </router-link>
    <router-link to="/pokedex" exact>
      <p>
        Pokedex
        <div class="link-active-menu"/>
      </p>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const username = ref('Everton')
</script>

<style lang="scss" scoped>
  .menu-container{
    display: flex;
    padding: 1rem 0;

    white-space: nowrap;
    background-color: $white;
    color: $title-black;

    a{
      color: $title-black;
      text-decoration: none;
    }
    h2{
      display: flex;
      font-family: $roboto;
      font-weight: 500;
      font-size: 2.25rem;
      margin: 0 auto 0 3rem;

      img{
        margin-right: 0.5rem;
        cursor: pointer;
      }

    }
    p{
      font-size: 2.25rem;
      font-weight: lighter;

      margin: 0 2rem 0 1rem;

      font-family: $play;
      cursor: pointer;

    }
  }
</style>