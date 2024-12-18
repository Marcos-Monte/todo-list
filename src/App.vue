<template>

  <main>
    <Tarefas />
  </main>

</template>

<script>

  import Tarefas from './components/Tarefas.vue';

  export default {

    name: 'App',

    components: {Tarefas},
    
  }
</script>

<style scoped>

  main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    background: linear-gradient(to right, #A43931, #1D4350); 
  }

</style>
