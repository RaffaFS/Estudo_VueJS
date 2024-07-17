<script setup>
import {reactive} from 'vue';

const estado = reactive({
    contador: 0,
    nome1: '',          // atributo novo
    nome2: '',          // atributo novo
    nome3: '',          // atributo novo
})
function incrementar(){
    estado.contador++;
}
function decrementar(){
    estado.contador--;
}
function atualizar(elemento){           // função nova
    estado.nome1 = elemento.target.value
}

// Tudo isso acima está também codado e explicado no "módulo" anterior,
// isso é referente ao início do aprendizado de acionamento de eventos
// e inserção de dados no HTML através desses eventos usando Vue.

// As "coisas novas" serão explicadas mais para frente

// Abaixo veremos sobre a captação de dados do HTML para a atualização
// de dados do JS que poderão ou não gerar uma atualização no display.

</script>

<template>

    <h2>---SEPARADOR---</h2>
    {{ estado.contador }}
    <button @click="incrementar" type="button">+</button>
    <button @click="decrementar" type="button">-</button>

<!--////////////////
    // INTRODUÇÃO //
    ////////////////-->

<!-- As explicações sobre os códigos acima já foram dadas nos primeiros
    comentários da parte script, entremos agora no que esse arquivo se
    propõe -->

<!-- Devemos lembrar que a captação de elementos em si do HTML não é
    algo necessário quando utilizamos o Vue. Outras sintaxes e ordenamentos
    nos permitem fazer isso de maneira mais prática, otimizada e intuitiva. -->

<!-- Só faremos esse trabalho de captação quando precisarmos de valores
    inseridos pelo usuário. Embora possamos trabalhar de algumas maneiras
    a base é sempre a mesma: -->

<!--//// /// // / / / / / / / / // /// ////-->
<!--//// /// // BASE ESTRUTURAL // /// ////-->
<!--//// /// // / / / / / / / / // /// ////-->

<!-- Utilizamos sempre uma função, seja ela declarada ou anônima, para
    escrever nosso algoritmo de manipulação do dado obtido; um argumento
    na função para armazenar o elemento que chamou-a e o caminho
    "element.target.value" no nosso algoritmo, diretamente como
    reatribuição de valor para uma propriedade de reactive, ou dentro
    de uma constante para armazenar o valor do campo a partir do evento-->

<!--////////////////////////////////////////
    // EVENTOS EXTERNOS, FUNÇÃO DECLARADA //
    ////////////////////////////////////////-->

    <h2>---SEPARADOR---</h2>
    {{ estado.nome1 }}
    <input @keyup="atualizar" type="text" placeholder="Exemplo1">
    <input @change="atualizar" type="text" placeholder="Exemplo2">

    <!-- Nesses dois casos chamo uma função declarada na linha 15,
    essa função armazena o input no argumento "elemento" e dentro
    dela eu atualizo o valor de "estado.nome1" para o valor do 
    input com "elemento.target.value" -->

    <!-- Como citado em "BASE ESTRUTURAL", eu poderia armazenar em
    uma constante o "elemento.target.value" para trabalhar com esse
    valor e então, pegar o valor manipulado e colocar como novo
    valor de estado.nome1 -->

    <!-- Falando mais especificamente sobre cada caso, a única
    diferença entre eles é o evento em si, o trigger para "atualizar"
    Enquanto o primeiro usa um "keyup" que vai chamar a função
    sempre que uma tecla clicada for solta, o segundo usa um "change"
    que vai chamar a função sempre que o "focus" for tirado do input
    e houver alguma mudança entre o estado anterior e posterior ao
    focus -->

<!--////////////////////////////////////
    // EVENTOS INLINE, FUNÇÃO ANÔNIMA //
    ////////////////////////////////////-->

    <h2>---SEPARADOR---</h2>
    {{ estado.nome2 }}
    <input type="text" placeholder="Exemplo3" @change="elemento => estado.nome2 = elemento.target.value">

    <!-- Praticamente toda explicação necessária aqui já está no
    bloco acima. Aqui uso apenas um exemplo, com o "change" e ao
    invés de chamar uma função declarada externa, descrevo uma
    arrow function anônima a partir do evento, usando a mesma
    estrutura de 1 argumento e "element.target.value" armazenado
    em uma constante ou diretamente como novo valor do atributo -->

<!--/////////////////////////
    // ATUALIZAÇÃO V-MODEL //
    /////////////////////////-->

    <h2>---SEPARADOR---</h2>
    {{ estado.nome3 }}
    <input v-model="estado.nome3" type="text" placeholder="Exemplo4">
    <input v-model="estado.nome3" type="text" placeholder="Exemplo5">

<!-- v-model é uma propriedade Vue exclusiva de <inputs>, <textareas> e <selects>
    que faz um link entre o atributo mencionado e o valor do elemento/tag em questão
    sendo que o atributo mencionado como valor de v-model, se presente no display,
    é atualizado em tempo real conforme o valor do elemento é alterado -->

<!-- Essa é uma funcionalidade ótima, mas que também pode ocasionar certos problemas,
    já que "não é uma via de mão única", ou seja, não apenas o valor do atributo
    muda se o valor do elemento mudar, mas também, o valor do elemento muda se o
    valor do atributo mudar -->

<!-- Isso é observável ao escrever algo em um dos dois últimos inputs, podemos ver 
    que não apenas o valor de estado.nome é atualizado, mas também o valor do outro
    input é atualizado "por tabela" -->

</template>

<style scoped>
</style>
