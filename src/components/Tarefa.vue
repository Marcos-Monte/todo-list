<template>

    <!-- Card em HTML exibito com a Descrição da Tarefa. 'v-bind-class', Classe que é renderizada de acordo com a dinamica do método computado -->
    <div 
        class="tarefa pendente"
        :class="statusTarefa"
        @click="alterarStatus()"
    >
        <!-- Botão (?) para excluir tarefa no futuro. Stop garante que nada mais aconteça após a interassão com esse botão -->
        <span class="excluir"
            @click.stop="excluirTarefa()"
        >x</span>

        <!-- Recebe via 'props' (Do Componente Pai), e interpola a descrição dentro do Card -->
        <p>{{ propsTarefa.descricao }}</p>

    </div>

</template>

<script>

    import eventBus from '@/barramento';

    export default {

        /* Nome, necessário para que não gere erro no navegador */
        name: 'AppTarefa',

        /* props que serão recebidas Diretamente pelo Componente Pai */
        props: {

            propsTarefa: {
                type: Object,
                required: true,
            }

        },

        /* Variável / Método, que será re-renderizada apenas se for detectada alguma mudança  */
        computed: {

            /* Monitora o valor de 'status' dentro de cada Objeto (tarefa) */
            statusTarefa(){

                /* Condicional em Ternário */
                return this.propsTarefa.status? 'concluida': 'pendente'

            }
            
        },

        /* Métodos de Ação do Componente */
        methods: {

            /* Ao clicar no elemento vai iniciar esse método */
            alterarStatus(){

                /* Emite um 'evento personalizado' e envia o Objeto (tarefa) clicada */
                eventBus.emit('alterouStatus', this.propsTarefa)

            },

            /* Ao clicar no elemento vai iniciar esse método */
            excluirTarefa(){

                /* Emite um 'evento personalizado' e envia o Objeto (tarefa) clicada */
                eventBus.emit('excluiuTarefa', this.propsTarefa)

            }
            
        }

    }

</script>

<style>

    /* Estilo Default */
    .tarefa {
        position: relative;
        width: 350px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        font-size: 1.5rem;
    }

    /* X de exclusão de tarefas individuais */
    .excluir {
        position: absolute;
        top: 2%;
        right: 1%;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7.5rem;
    }

    /* Se o 'status' do Objeto (tarefa) for false */
    .pendente {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .pendente .excluir {
        background-color: #B73229;
    }

    .pendente .excluir:hover {
        background-color: #fff;
        color: #B73229
    }

    /* Se o 'status' do Objeto (tarefa) for true */
    .concluida {
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }

    .concluida .excluir {
        background-color: #0A8F08;
    }

    .concluida .excluir:hover {
        background-color: #fff;
        color: #0A8F08;
    }



</style>