<template>

    <section>

        <div class="barra">
            <span>{{ porcentagem }}%</span>
            <div class="status" :style="{width: porcentagem + '%'}">
                
            </div>
            

        </div>

        

    </section>

</template>

<script>

    import data from '@/data';

    const tarefas = data.tarefas;
    const tarefasFaltantes = tarefas.filter(tarefa => tarefa.status === false)

    export default {
        
        data(){
            return{
                porcentagem: parseInt((tarefasFaltantes.length / tarefas.length) * 100),
                
            }
        }

    }

</script>

<style scoped>

    section {
        width: 100%;
    }

    .barra {
        width: 100%;
        height: 2rem;
        border: solid #000;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        z-index: 2;
        font-size: 1.2rem;
        font-weight: 900;
        color: #fff;
    }

    .status {
        background-color: red;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }



</style>