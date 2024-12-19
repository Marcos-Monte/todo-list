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

  import eventBus from './barramento';

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

    },

    /* Ciclo de Vida do Componente: Sempre que criar o Esse componente, vai ficar observando os elementos daqui de dentro */
    created(){

      /* Monitorando o Evento 'alterouStatus' que recebe um Objeto*/
      eventBus.on('alterouStatus', (tarefa) => {

        /* Armazena o 'indice' do Objeto (tarefa enviada pela Emissão do Evento) */
        const index = this.tarefas.indexOf(tarefa);

        /* Armazena o Objeto (tarefa selecionada e encontrada via Index) */
        const tarefaSelecionada = this.tarefas[index];

        /* Altera o valor Boolean da chave 'status' para o 'oposto' dentro do Objeto */
        tarefaSelecionada.status = !tarefaSelecionada.status

      }),

      /* Monitorando o Evento 'excluiuTarefa' que recebe um Objeto*/
      eventBus.on('excluiuTarefa', (tarefa) => {

        /* Armazena o 'indice' do Objeto (tarefa enviada pela Emissão do Evento) */
        const index = this.tarefas.indexOf(tarefa);

        /* Verifica se o 'index' é maior ou igual a zero, antes de excluir o Objeto (tarefa) do Array (tarefas). OBS:  splice = recebe duas propriedades: inicio (onde se inicia a retirada de elementos) e quantidade (qtde de elementos a serem retirados do Array)*/
        (index >= 0)&&this.tarefas.splice(index, 1)

      })

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

  #app>h1 {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
  
  }

</style>
