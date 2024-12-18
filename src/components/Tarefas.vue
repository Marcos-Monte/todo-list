<template>

  <section class="container">
    <h1>Tarefas</h1>

    <PorcentagemTarefas />
    <InputTarefas />
    <ListaTarefas />
  </section>

</template>

<script>

  import InputTarefas from './InputTarefas.vue';
import ListaTarefas from './ListaTarefas.vue';
import PorcentagemTarefas from './PorcentagemTarefas.vue';

  export default {
    name: 'MinhasTarefas',

    components: {ListaTarefas, InputTarefas, PorcentagemTarefas},
    
  }
</script>

<style>

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    color: #fff;
    text-shadow: 10px black;
  }

  @media (max-width: 500px){

    .container{
      width: 100%;
      padding: .2rem;

    }
  }

</style>
