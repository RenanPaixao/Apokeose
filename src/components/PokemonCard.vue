<template>
    <div class="container">
      <div>
        <img alt="Pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif"/>
        <img class="remove-icon" src="../assets/gray-remove.png" alt="remove">
      </div>
      <p>Name: <span>{{ name }}</span></p>
      <p>Surname: <span>{{ surname }}</span><img src="../assets/edit.png" alt="edit"></p>
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
  .container {
    width: 11.875rem;
    height: 12rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 1.5rem;

    background-color: $white;
    border-radius: 8px;

    div{
      display: flex;
      align-items: center;
      img{
        height: 5rem;
        width: 5rem;

        margin: 0 2rem 0 auto;
      }
      .remove-icon{
        height: 1rem;
        width: 1rem;
        margin: 0 1rem 6rem 0;

        cursor: pointer;
      }
    }

    p{
      height: 1rem;
      font-size: 1rem;
      font-weight: bold;

      display: flex;
      margin: 0.3rem 0 0 1.3rem;
      color: $primary;
      font-family: $play;

      img{
        height: 1rem;
        width: 1rem;

        cursor: pointer;
      }
    }

    span {
      color: $title-black;
      margin: 0 0.3rem;
    }
    p.type{
      font-family: $roboto;
      font-weight: 400;

      span{
        color: $primary-blue;
        margin-left: 0.3rem;
      }
    }
  }
</style>
