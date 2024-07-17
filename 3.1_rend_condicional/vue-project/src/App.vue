<script setup>

// Ainda falando sobre a integração/renderização do JS no HTML com o Vue, 
// vejamos agora sobre a "renderização condicional". Para iniciar vou trazer
// o último dos exemplos do "módulo" anterior, que lembra um pouco o que
// vamos aprender agora.

const srcIMG1 = 'src/imgTeste1.jpg'
const condicao1 = false
const condicao2 = true
const condicao3 = 'Lobo'

// Acima então eu faço a criação de 2 constantes, sendo uma delas o caminho
// para um diretório/arquivo e a outra o armazenamento de um valor booleano

</script>

<template>

    <img :src="srcIMG1" alt="lobo azul">
    <button :disabled="!condicao1" >ENVIAR</button>

<!-- Acima eu tenho a criação de dois elementos que utilizam "v-bind" para
    solicitar a renderização de valores de atributos por parte do JS sendo
    que o segundo deles recebe um booleano que nesse caso serve como uma
    condição direta, que diz que se "condicao1" for 0, false ou não existir,
    o "disabled" deve ser "true". Essa é uma abordagem útil em certos casos,
    mas apenas para atributos -->

<!--//////////
    // V-IF //
    ////////// -->

<!-- O que vamos fazer agora sobre a renderização de um elemento é algo de
    funcionamento parecido. Resumidamente, cada elemento receberá uma condição
    e aqueles cujos quais tiverem a condição "efetivada" serão renderizados
    enquanto os demais não serão renderizados -->

    <img v-if="condicao1":src="srcIMG1" alt="lobo azul">
    <img v-if="condicao2":src="srcIMG1" alt="lobo azul">
    <img v-if="condicao3":src="srcIMG1" alt="lobo azul">

<!-- Na execução perceberá que temos dois lobos após o botão enviar, isso
    porque o primeiro deles não tem a condição cumprida já que condicao1 é 
    false, já os outros dois passam, sendo que o valor do segundo é 
    explicitamente "true" enquanto que o terceiro apenas existe com algum 
    valor que não faz referência a false, o que já é o bastante para a 
    respectiva condição -->

<!-- Claro, esses foram exemplos simples, mas eu posso ir além e utilizar
    praticamente qualquer condição que eu usaria num if de JS comum -->

    <h1>---Separador---</h1>
    <img v-if="condicao3 == 'Lobo'" :src="srcIMG1" alt="lobo azul">
    <img v-if="10 + 10 >=20" :src="srcIMG1" alt="lobo azul">
    <img v-if="condicao3 != 'pessoa'" :src="srcIMG1" alt="lobo azul">
    <img v-if="condicao2 && condicao3 == 'Lobo' && 5*5 > 50" :src="srcIMG1" alt="lobo azul">

<!-- Temos agora mais quatro imagens, mas na execução percebemos que apenas
    três foram renderizadas, basta olharmos para as condições próprias de
    cada elemento img e entenderemos o que ocorreu -->

<!--////////////
    // V-SHOW //
    //////////// -->

    <h1>---Separador2---</h1>
    <img v-show="condicao3 == 'Lobo'" :src="srcIMG1" alt="lobo azul">
    <img v-show="10 + 10 >=20" :src="srcIMG1" alt="lobo azul">
    <img v-show="condicao3 != 'pessoa'" :src="srcIMG1" alt="lobo azul">
    <img v-show="condicao2 && condicao3 == 'Lobo' && 5*5 > 50" :src="srcIMG1" alt="lobo azul">

<!-- O que acabamos de fazer aqui foi replicar os elementos de cima e 
    substituir cada "v-if" por um "v-show" e, aparentemente, obtivemos os
    mesmos resultados. A diferença é que, enquanto o "v-if" controla se um
    elemento será ou não será renderizado, o "v-show" controla o valor de
    "display" (propriedade de estilo) do elemento. Em outras palavras, caso
    o elemento não tenha sua condição cumprida "display: none" é aplicado
    ao estilo do elemento -->

<!-- Assim sendo, um elemento que não passa num "v-if" nem mesmo existirá no
    nosso programa, enquanto que um elemento que não passa num "v-show", apesar
    de não aparecer inicialmente, ainda será renderizado, ou seja, poderá ser
    manipulado mais adiante na aplicação -->

</template>

<style scoped>
</style>
