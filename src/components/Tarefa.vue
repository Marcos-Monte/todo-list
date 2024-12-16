<template>

    <article 
        class="tarefa"
        :class="status? 'on': 'off'"
        @click="alterarStatus()"
        
    >
        <div>
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
        height: 5rem;
        border-radius: 5px;

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