<template>
    <div class="informationContainer">
        <img alt="Pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif"/>
      <p>Name: <span>{{ name }}</span></p>
      <p>Surname: <span>{{ surname }}</span></p>
      <p class="type">Type:<span>{{ type }}</span> </p>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const name = 'Squirtle';
const surname = ref('Bolinha');
const type = 'Aquatic';
</script>

<style lang="scss" scoped>
  .informationContainer {
    width: 11.875rem;
    height: 12rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 1.5rem;

    background-color: $white;
    border-radius: 8px;

    p {
      height: 1rem;
      font-size: 1rem;
      font-weight: bold;

      margin: 0.3rem 0 0 1.8rem;
      color: $primary;
      font-family: $play;
    }

    span {
      color: $title-black;
    }
    p.type{
      font-family: $roboto;
      font-weight: 400;

      span{
        color: $primary-blue;
        margin-left: 0.3rem;
      }
    }
    img{
      height: 5rem;
      width: 5rem;

      margin: auto 0 10%;
      align-self: center;
    }
  }
</style>
