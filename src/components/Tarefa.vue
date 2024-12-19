<template>

    <!-- Card em HTML exibito com a Descrição da Tarefa. 'v-bind-class', Classe que é renderizada de acordo com a dinamica do método computado -->
    <div 
        class="tarefa pendente"
        :class="statusTarefa"
    >

        <!-- Recebe via 'props' (Do Componente Pai), e interpola a descrição dentro do Card -->
        <p>{{ propsTarefa.descricao }}</p>

    </div>

</template>

<script>

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
            
        }

    }

</script>

<style>

    /* Estilo Default */
    .tarefa {
        width: 350px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        font-size: 1.5rem;
    }

    /* Se o 'status' do Objeto (tarefa) for false */
    .pendente {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    /* Se o 'status' do Objeto (tarefa) for true */
    .concluida {
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }



</style>