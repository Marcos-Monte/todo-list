<template>

  <section id="app">

    <h1>Tarefas</h1>

    <!-- Recebe como 'props', Método Computado que indica a quantidade de tarefas conbluídas dentro do Array (tarefas) -->
    <ProgressoTarefas 
    
      :propsProgresso="progresso"
    
    />

    <InputTarefas />

    <Botoes />

    <!-- Recebe como 'props', a lista de 'tarefas' -->
    <ListaTarefas 
      
      :propsTarefas="tarefas"

    />

  </section>

</template>

<script>

  /* Importando Componentes Filhos para o Componente Principal */
  import Botoes from './components/Botoes.vue';
import InputTarefas from './components/InputTarefas.vue';
import ListaTarefas from './components/ListaTarefas.vue';
import ProgressoTarefas from './components/ProgressoTarefas.vue';

  /* Importando a lista de tarefas de um arquivo externo */
  
  /* Importando Vue Instance responsável por comunicação entre componentes */
  import eventBus from './barramento';

  export default {

    /* Registrando Componentes Filhos */
    components: {ProgressoTarefas, InputTarefas, ListaTarefas, Botoes},

    data(){

      return {

        /* Variavel 'tarefas' recebe o Array de Objetos (Cada Objeto é uma tarefa) */
        tarefas: [],

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
        return parseInt(concluidas / total * 100) || 0 

      }

    },

    /* Métodos, Objetos, etc... de dentro dessa 'seção', serão monitorados */
    watch: {

      /* Monitorar o Array 'tarefas' */
      tarefas: {
        /* Se vamos verificar as mudanças profundamente ou não (true ou false) */
        deep: true,


        handler(){
          /* Pega a lista de tarefas <- Converte em String <- setItem (adiciona) no 'localStorage' (navegador), usando a chave 'tarefas' como referencia  */
          localStorage.setItem('tarefas', JSON.stringify(this.tarefas))

        }

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

      }),

      /* Monitorando o Evento 'adicionouTarefa' que recebe uma String*/
      eventBus.on('adicionouTarefa', (novaDescricao) => {

        /* Armazena os Objetos (tarefa) que tem a mesma descricao */
        const duplicado = this.tarefas.filter(tarefa => tarefa.descricao.toUpperCase() === novaDescricao.toUpperCase())

        /* Condicionais:  */
        if (novaDescricao === ''){ /* Se a String (novaDescricao) for vazia */

          return

        } else if (duplicado < 1){ /* Se  */

          /* Adicionando Objeto (nova tarefa) ao Array (tarefas) */
          this.tarefas.push({ 

            /* chave: valor */
            descricao: novaDescricao,
            status: false

          })

        }

        

      }),

      /* Monitorando o Evento 'concluiuTarefas' que recebe uma String*/
      eventBus.on('concluiuTarefas', (concluir) => {

        /* Atribuindo o valor 'true' para todas as chaves 'status' de cada Objeto (tarefa) dentro do Array (tarefas) */
        this.tarefas.map((tarefa) => tarefa.status = concluir)

      });

      /* Monitorando o Evento 'limpouTarefasConcluidas' que recebe uma String*/
      eventBus.on('limpouTarefasConcluidas', () => {

        /* Evento não manda nenhuma informação. Armazena na constante apenas os Objetos (tarefa) com o status 'false' (tarefa não concluída) */
        const tarefasFaltantes = this.tarefas.filter(tarefa => tarefa.status === false);

        /* Atribui o novo Array (tarefasFaltantes) substituindo os valores do antigo */
        this.tarefas = tarefasFaltantes
      })

      /* Assim que o componente é criado, faz uma busca nos dados salvos no navegador (localStorage), busca os dados salvos com a chave 'tarefas' */
      const tarefasJson = localStorage.getItem('tarefas');

      /* Armazena os dados achados que era String, transformados em um Array */
      const tarefasArray = JSON.parse(tarefasJson);

      /* Condicional, se os dados encontrados forem um Array -> Armazenar esse Array nos 'dados locais - tarefas' -> senão, armazenar um array vazio */
      Array.isArray(tarefasArray)? this.tarefas = tarefasArray : this.tarefas = [];

      /* OBS-> DEPOIS DE CRIAR, FICAR MONITORANDO 'TAREFAS' (seção 'watch') */
    }

  }
</script>

<style scoped>

  #app {
    width: 100%;
    min-width: 280px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #cb2d3e, #1D4350); 
    color: #fff;
    font-family: "Verdana", sans-serif;
  }

  #app>h1 {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
  }

</style>
