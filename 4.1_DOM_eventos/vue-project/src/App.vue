<script setup>
import {reactive} from 'vue';
// Falarei sobre esse primeiro "import" mais à frente

// Vimos já sobre a integração do JS no HTML através da sintaxe correta
// dentro do "App.vue", em outras palavras uma maneira mais simplificada
// de trabalhar com o DOM

// Porém, o que vimos foi apenas referente à captação de elementos e a
// inscrição de sintaxes JS diretamente dentro do HTML. Agora veremos
// um pouco sobre eventos e respostas.

const estado = reactive({
    contador: 0,
})
function incrementar(){
    estado.contador++;
}
function decrementar(){
    estado.contador--;
}

// Antes de qualquer coisa eu devo criar uma constante que receberá os
// valores que queremos manipular, sendo basicamente uma estrutura de
// declaração de função que recebe um objeto como método e os elementos
// que queremos manipular são passados como atributos

// Esse é o bloco "reactive", para usá-lo é importante que no início
// do código eu o tenha importado do Vue, como pode ver que fiz aqui
// neste arquivo na linha 2

// Depois disso é só programar normalmente as funções que manipularão
// ou farão uso dos elementos/atributos dentro de reactive. 

// É graças a esse bloco que no Vue os valores são atualizados em tempo 
// real na tela, mesmo sem as sintaxes comuns de captação de elementos ou 
// eventos, e além disso, apenas são atualizados os elementos ou áreas
// manipulados, não o HTML como um todo

</script>

<template>

<!-- Aqui abaixo eu chamo o elemento manipulável que desejo de dentro
    de reactive para ser exibida com {{  }}, e crio dois botões para 
    chamarem as funções que declarei acima -->

    {{ estado.contador }}
    <button @click="incrementar" type="button">+</button>
    <button @click="decrementar" type="button">-</button>

<!-- Por não ser necessário o uso de "getElementBy" ou "querySelector" também
    não é necessária a declaração de "id" para os botões -->

<!-- Aqui os eventos são descritos "inline" dentro dos próprios elementos
    usando "@evento="função"" como podemos observar acima (o @ para eventos
    funciona como os ":" para atributos) -->

</template>

<style scoped>
</style>
