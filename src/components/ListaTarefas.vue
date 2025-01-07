<template>

    <h2 class="titulo">Lista de Tarefas</h2>

    <!-- Seção será visível apenas se o Array (propsTarefas), recebido via 'props', for 'true' (existir algum valor dentro) -->
    <section v-if="propsTarefas.length" class="listaTarefas" >


        <!-- Array (propsTarefas) será percorrido e cada Objeto será enviada via 'props' (propsTarefa) para renderização do componente. 
        OBS: Necessário indicar uma 'v-bind-key', para evitar valores duplicados -->
        <Tarefa 
            v-for="tarefa in propsTarefas" 
            :key="tarefa.descricao" 
            :propsTarefa="tarefa" 
        />

    </section>

    <!-- Se o Array (propsTarefas) for vazio, mostrar a mensagem abaixo -->
    <p v-else class="mensagem">Sua vida está organizada ;)</p>

</template>

<script>

    /* Import de Componente Filho para o Componente Pai*/
    import Tarefa from './Tarefa.vue';

    export default {

        /* Registrando Componentes Filhos */
        components: {Tarefa},

        /* props que serão recebidas Diretamente pelo Componente Pai */
        props: {

            propsTarefas: {
                type: Array,
                required: true,
            }

        }

    }

</script>

<style>

    .titulo{
        padding: 3rem 0;
        font-size: 2rem;
    }

    .listaTarefas {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem
    }

    .mensagem {
        width: 100%;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        text-align: center;
    }

    /* Media */
    @media screen and (max-width: 500px){
        .mensagem{
            font-size: 1.5rem;
        }
    }

</style>