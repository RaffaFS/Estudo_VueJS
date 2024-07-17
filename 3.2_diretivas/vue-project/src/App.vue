<script setup>

// Já vimos anteriormente sobre renderização condicional, esta é uma continuação
// e um complemento à este tema. Logo abaixo estarei definindo as constantes que
// utilizaremos durante os exemplos

const srcIMG1 = 'src/imgTeste1.jpg'
const srcIMG2 = 'src/imgTeste2.jpg'
const gostaAzul = true
const gostaAmarelo = true

</script>

<template>

<!-- Anteriormente vimos o básico sobre "v-if" e "v-show", sobre v-show era só
    aquilo mesmo, já sobre o v-if daremos continuidade agora, isso se trata de -->

<!--///////////////
    // DIRETIVAS //
    ///////////////-->

    <img v-if="gostaAzul" :src="srcIMG1" alt="lobo azul">
    <img v-if="gostaAmarelo" :src="srcIMG2" alt="lobo amarelo">

<!-- Veja que se eu mencionar as duas condições em "v-if's" elas trabalharam 
    separadamente, como já vimos no "módulo" anterior. Nesse caso ambas as
    condições são cumpridas então ambos os lobos são renderizados, porém se 
    fizermos isso: -->

    <h1>---Separador---</h1>
    <img v-if="gostaAzul" :src="srcIMG1" alt="lobo azul">
    <img v-else-if="gostaAmarelo" :src="srcIMG2" alt="lobo amarelo">
    <h2 v-else>Tu não gosta de nada?</h2>

<!-- Apenas o lobo azul é renderizado. Isso acontece pois a partir dessa "SINTAXE
    E ORGANIZAÇÃO", os elementos passam a estar interligados, fazendo com que eles
    trabalhem como um "if/else" padrão do JS, ou seja, uma condição sendo cumprida
    as demais que ainda não foram testadas não serão  -->

<!-- Caso atualize o valor de "gostaAzul" para "false" verá que o amarelo será
    renderizado, pois a condição do primeiro elemento não foi cumprida, dando
    oportunidade para a condição do segundo elemento ser testada -->

<!-- Caso atualize o valor de "ambas as constantes" para "false", verá que o que
    renderizado é o elemento "h2", que também está interligado e ocupando o papel
    de else, ou seja, sem a obrigação de cumprir uma condição para ser renderizado -->

<!-- Além disso, com isso percebemos que elementos de "famílias" diferentes podem
    fazer essa interligação a fim de trabalhar com as condicionais -->

</template>

<style scoped>
</style>