<template>

  <section id="app">

    <h1>Tarefas</h1>

    <ProgressoTarefas />

    <InputTarefas />

    <!-- Recebe como 'props', a lista de 'tarefas' -->
    <ListaTarefas 
      
      :propsTarefas="tarefas"

    />

  </section>

</template>

<script>

  /* Importando Componentes Filhos para o Componente Principal */
  import InputTarefas from './components/InputTarefas.vue';
import ListaTarefas from './components/ListaTarefas.vue';
import ProgressoTarefas from './components/ProgressoTarefas.vue';

  /* Importando a lista de tarefas de um arquivo externo */
  import data from '@/data.js';

  export default {

    /* Registrando Componentes Filhos */
    components: {ProgressoTarefas, InputTarefas, ListaTarefas},

    /*  */
    data(){

      return {

        /* Variavel 'tarefas' recebe o Array de Objetos (Cada Objeto é uma tarefa) */
        tarefas: data.tarefas

      }

    }

  }
</script>

<style scoped>

  #app {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #A43931, #1D4350); 
    color: #fff;
    font-family: "Verdana", sans-serif;
  }

</style>
