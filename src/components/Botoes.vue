<template>

    <section class="containerBotoes">


        <button class="botao concluir"
            @click="concluirTarefas()"
        >
            Concluir Tarefas
        </button>
        
        <button class="botao limpar"
            @click="limparTarefas()"
        >
            Limpar Tarefas
        </button>

    </section>

</template>

<script>

    /* Importando Vue Instance responsável por comunicação entre componentes */
    import eventBus from '@/barramento';

    export default {

        /* Nome, necessário para que não gere erro no navegador */
        name: 'MeusBotoes',

        data(){

            return {
                concluir: true,
            }

        }, 

         /* Métodos de Ação do Componente */
        methods: {

            /* Ao iniciar esse método será enviado um evento que acarretará em marcar como concluidas todas as tarefas */
            concluirTarefas(){

                /* Método de confirmação, se clicar em confirmar, segue o codigo */
                const confirmacao = confirm('Você deseja marcar todas as tarefas como concluídas?');

                confirmacao === true&&eventBus.emit('concluiuTarefas', this.concluir )/* Emite um Evento Personalizado e para o valor da variavel 'concluir' */

            },

            /* Ao iniciar esse método será enviado um evento que acarretará apagar todas as tarefas que estiverem consluídas */
            limparTarefas(){

                 /* Método de confirmação, se clicar em confirmar, segue o codigo */
                const confirmacao = confirm('Você deseja apagar todas as tarefas concluídas?');
                /* Emite um Evento Personalizado e não passa valor algum */
                confirmacao === true&&eventBus.emit('limpouTarefasConcluidas')

            }

        }
    }

</script>

<style>

    .containerBotoes {
        width: 100%;
        height: 8rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border-bottom: solid #F44336;
    }

    .botao{
        width: 20%;
        padding: 1rem 0;
        font-size: 1.2rem;
        font-weight: 600;
        border-radius: 8px;
        border: none;
    }

    .concluir {
        background-color: #4CAF50;
        color: #fff;
    }

    .concluir:hover {
        background-color: #0A8F08;
        color: #000
    }

    .limpar {
        background-color: #B73229;
        color: #fff;
    }

    .limpar:hover {
        background-color: #F44336;
        color: #000
    }

    /* Media */
    @media screen and (max-width: 800px){
        .botao{
            width: 35%;
            font-size: 1rem;
        }

    }
</style>