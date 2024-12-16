<template>

    <section class="containerInput">
        <div>
            <input 
                type="text" 
                placeholder="Nova tarefa?" 
                
            >
            <button @click="cadastrarTarefa(event)">+</button>
        </div>
    </section>

</template>

<script>

    import data from '@/data';

    const tarefas = data.tarefas;

    export default {
        methods: {
            cadastrarTarefa(event){
                tarefas.push(event.target.value)
            }
        }
    }

</script>

<style scoped>

    .containerInput {
        display: flex;
        flex-direction: row;
        gap: 0;
        padding-bottom: 2rem;
        border-bottom: solid gray;
    }

    div {
        width: 35%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        flex: 1;
        height: 2rem;
        padding: 0 .3rem;
        border: solid #000;
        border-radius: 10px 0px 0px 10px;
    }

    button{
        height: 2rem;
        padding: 0 .3rem;
        border: solid #000;
        border-radius: 0px 10px 10px 0px;
        background-color: aqua;
        font-size: 1.2rem;
        font-weight: 900;
    }

</style>