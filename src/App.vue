<template>

  <section id="app">

    <h1>Tarefas</h1>

    <!-- Recebe como 'props', Método Computado que indica a quantidade de tarefas conbluídas dentro do Array (tarefas) -->
    <ProgressoTarefas 
    
      :propsProgresso="progresso"
    
    />

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

    data(){

      return {

        /* Variavel 'tarefas' recebe o Array de Objetos (Cada Objeto é uma tarefa) */
        tarefas: data.tarefas,

      }

    },

    /* Métodos que serão re-renderizados apenas se houver mudanças */
    computed: {

      progresso() {

        /* Armazena a quantidade total de Objetos dentro do Array */
        const total = this.tarefas.length;

        /* Armazena a quantidade de Objetos onde o valor da chave 'status' é 'true' */
        const concluidas = this.tarefas.filter(tarefa => tarefa.status === true).length

        /* Retorna, em forma de porcentagem. ParseInt, serve para transformar o resultado em um número inteiro */
        return parseInt((concluidas / total) * 100)

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
