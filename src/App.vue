<template>

  <section>
    <Tarefas />
  </section>

</template>

<script>

  import Tarefas from './components/Tarefas.vue';

  export default {

    name: 'App',

    components: {Tarefas},
    
  }
</script>

<style scoped>

  section {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, #A43931, #1D4350); 
  }

</style>
