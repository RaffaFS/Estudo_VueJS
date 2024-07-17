<script setup>

// Como vimos no passo 1, o campo script é onde escreveremos nosso JS normalmente
const nome = "Rafael Gonçalves Ribeiro"
const meuObj = {
    idade: 24,
    favAnime: 'Naruto',
    local: 'Brusque - SC'
}

function moraEm1(){
    return `${nome} mora em ${meuObj.local}`
}

function moraEm2(nome){
    return `${nome} mora em ${meuObj.local}`
}

const srcIMG1 = 'src/imgTeste1.jpg'
const srcIMG2 = 'src/imgTeste2.jpg'

const condicao = false

</script>

<template>

<!-- O campo template traz a sintaxe do HTML e aqui escreveremos o corpo do nosso
    HTML como já estamos acostumados, o que ainda se mantém no "index.html" é
    tudo aquilo que vinha andes do "<body>" e também a chamada do script, apontando
    ao main.js -->

<!-- Apesar da sintaxe principal do template ser de HTML, podemos fazer uma integração
    direta de JS ao HTML da maneira que demonstro abaixo, isso nos poupa toda a sintaxe
    de captação de elementos com "getElementBy" ou "querySelector" de cada elemento,
    assim como a parte de atribuição com "innerText" ou "innerHTML" por exemplo -->

    <h1>Olá</h1>
    <h2>{{ nome }}</h2>
    <h2>{{ `${meuObj.idade} é a idade` }}</h2>
    <h2>{{ meuObj.favAnime + ' é o anime favorito' }}</h2>
    <h3>{{ moraEm1('Rafael') }}</h3>
    <h3>{{ moraEm2('Rafael') }}</h3>

<!-- Isso tudo funciona como uma "renderização", o Vue entende o que está sendo
    mencionado converte na sintaxe necessária e insere o código no index.html -->

<!-- Ainda falando da renderização do JS para o HTML, temos como atribuir valores
    dinâmicos também para atributos de elementos, porém usando uma sintaxe um pouco
    diferente, numa ideia de "bind" (ligar), veja: -->

    <img v-bind:src="srcIMG1" alt="lobo azul">
    <img :src="srcIMG2" alt="lobo amarelo">

<!-- O primeiro exemplo é utilizando a sintaxe completa, mencionando o "v-bind", o
    segundo é fazendo o uso do atalho, onde basta escrever ":" antes do atributo em
    questão. Além disso, para sources, é importante lembrar que o caminho deve ser 
    escrito como se estivesse sendo escrito a partir do HTML -->

<!-- Outra coisa interessante que podemos fazer é a criação de algoritmos que nos
    trazem um resultado booleano e, a partir desse resultado manipulamos um atributo -->

    <button :disabled="!condicao" >ENVIAR</button>

</template>

<style scoped>
</style>