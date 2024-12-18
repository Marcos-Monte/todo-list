<template>

    <article 
        class="tarefa"
        :class="status? 'on': 'off'"
        @click="alterarStatus()"
        
    >
        <div>
            <button class="excluir">x</button>
            {{ descricao }}
        </div>
    </article>

</template>

<script>

    export default {
        name: 'MinhaTarefa',

        props: {
            descricao: {
                type: String
            },
            status: {
                type: Boolean
            }
        },

        data(){

            return {
                propsStatus: this.status
            }

        },

        methods: {
            alterarStatus(){
                this.$emit('statusAlterou', !this.propsStatus)
                console.log('clique:' + !this.propsStatus)
            }
        }


    }

</script>

<style scoped>

    .tarefa {
        width: 20rem;
        height: 7rem;
        border-radius: 5px;
        opacity: .8;
        position: relative;
    }

    .tarefa:hover{
        opacity: 1;
    }

    .excluir {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        top:0;
        right: 0;
        background-color: red;
        color: #fff;
        font-weight: 900;
        border: none
    }

    div {
        width: 97%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;
        border-radius: 5px;
        font-size: 1.25rem;

        font-weight: 900;
    }

    .on {
        background-color: green;
    }
    .on>div{
        background-color: #53d14e;
        color: #000;
    }

    .off {
        background-color: red;
    }
    .off>div{
        background-color: #db4b4b;
        color: #fff;
        text-decoration: line-through;
    }



</style>