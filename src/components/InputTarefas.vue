<template>

    <!-- Seção completa -->
    <section class="secaoInput">

        <!-- Container que guarda o 'input' e o 'button' -->
        <div class="containerInput">

            <!-- Campo de insersão de textos. Diretiva (v-model) garante que o valos seja atribuido corretamente -->
            <input 
                type="text"
                placeholder="Nova tarefa?"
                @keydown.enter="adicionarTarefa()"
                v-model="descricao"
            />
            <!-- Botão ao clicar inicia o método atribuido -->
            <button 
                @click="adicionarTarefa()"
            >
                +
            </button>

        </div>

    </section>

</template>

<script>

    /* Importando Vue Instance responsável por comunicação entre componentes */
    import eventBus from '@/barramento';

    export default {

        data() {

            return {
                /* Valor que o 'input' irá receber */
                descricao: '',

            }

        },

        /* Métodos de Ação do Componente */
        methods: {

            /* Método responsavel por Iniciar o Evento personalizado */
            adicionarTarefa(){

                /* Emite um 'evento personalizado' e envia o 'texto' (descrição) após 'click' em botão */
                eventBus.emit('adicionouTarefa', this.descricao)

                /* Reinicia o valor como vazio, após 'emitir' o evento */
                this.descricao = ''

            }

        }

    }

</script>

<style>

    .secaoInput {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .containerInput {
        width: 50%;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .containerInput>input {
        width: 90%;
        height: 100%;
        border-radius: 12px 0px 0px 12px;
        border: 1px solid #ddd;
        background-color: transparent;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 800;
        padding-left: .5rem;
    }

    .containerInput>input::placeholder{
        color: #ddd;
    }

    .containerInput>button{
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0px 12px 12px 0px;
        border: 1px solid #ddd;
        background-color: #A43931;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 800;
    }

    /* Media */

    @media screen and (max-width: 800px){
        .containerInput{
            width: 80%;
        }
    }

</style>
