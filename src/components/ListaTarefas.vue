<template>

    <section class="lista">
        <Tarefa 
            v-for="(tarefa, index) in tarefasOrdenadas"
            :key="index"
            :descricao="tarefa.descricao"
            :status="tarefa.status"
            @statusAlterou="status=$event"
        />

    </section>

</template>

<script>

    import Tarefa from '@/components/Tarefa.vue';
import data from '@/data';

    export default {

        components: {Tarefa},

        data(){
            return {

                tarefas: data.tarefas,

            }
        },

        computed: {
            tarefasOrdenadas(){
                return [...this.tarefas].sort((a, b) => b.status - a.status)
            }
        }

    }

</script>

<style scoped>

    .lista {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 1rem;
    }

</style>