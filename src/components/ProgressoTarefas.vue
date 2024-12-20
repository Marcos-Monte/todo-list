<template>
    <!-- Seção completa -->
    <section class="secaoProgresso">

        <!-- Barra de Progresso -->
        <div class="barraProgresso">

            <!-- Marcador do Progresso -->
            <span>{{ propsProgresso }}%</span>

            <!-- Preenchimento da Barra de Progresso... O preenchimento é baseado na largura (width) renderizada dinamicamente por 'v-bind-style' -->
            <div class="statusProgresso" :style="{width: propsProgresso + '%'}"></div>

        </div>

    </section>

</template>

<script>

    export default {

         /* props que serão recebidas Diretamente pelo Componente Pai */
        props: {

            propsProgresso: {
                type: Number,
                default: 0 
            }

        }

    }

</script>

<style>

    .secaoProgresso {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Position 'relative', garante que o elemento 'statusProgresso' o use como referencia */
    .barraProgresso {
        position: relative;
        width: 50%;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid #fff;
        border-radius: 8px;
    }

    /* propriedade (z-index) garante que o Marcador do Progresso fique ACIMA dos outros elementos*/
    .barraProgresso>span {
        z-index: 2;
        font-size: 1.5rem;
    }

    /* Position absoluta de acordo com o elemento Pai. */
    .statusProgresso {
        position: absolute;
        left: 0;
        height: 100%;
        background-color: green;
        border-radius: 8px;
    }

    /* Media */
    @media screen and (max-width: 800px){
        .barraProgresso{
            width: 80%;
        }
    }

</style>