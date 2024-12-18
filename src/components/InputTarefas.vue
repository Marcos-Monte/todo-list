<template>

    <section class="containerInput">

            <input 
                type="text" 
                placeholder="Nova tarefa?" 
                v-model="novaTarefa"
            >
            <button @click="cadastrarTarefa()">+</button>
        
    </section>

</template>

<script>

    import data from '@/data';

    const tarefas = data.tarefas;

    export default {

        data(){
            return{

                novaTarefa: '',

            }
        },

        methods: {

            cadastrarTarefa(){
                
                tarefas.push({
                    descricao: this.novaTarefa,
                    status: 1,
                })
                console.log('ADD')
            }

        }
    }

</script>

<style scoped>

    .containerInput {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0;
        padding-bottom: 2rem;
        border-bottom: solid gray;
    }

    input {
        width: 50%;
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

    @media (max-width: 850px){

        input{
            width: 80%;
        }
    }

</style>