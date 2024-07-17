<script setup>

// Voltando um pouco à ideia de diretivas temos também uma chamada "v-for"
// que nos ajuda a trabalhar com arrays e renderizá-los em listas.

const arrayNomes = ['Rafael', 'Lucas', 'Michele', 'Adir']
const imageURL = ['https://via.placeholder.com/150', 'https://via.placeholder.com/200', 'https://via.placeholder.com/250']

</script>

<template>

<ul>
    <li v-for="nome in arrayNomes">
        {{ nome }}
    </li>
</ul>

<!-- Em relação ao script, vamos nessa primeira parte nos atentar apenas
    a criação dos arrays simples com nomes e URLs, falaremos sobre o
    reactive e as funções mais abaixo -->
    
<!-- Aqui no template utilizamos uma diretiva que faz o mesmo que faz o 
    mesmo que um iterador "for" simples, para cada item (nome) dentro do 
    array o código dentro de {{  }} é executado e seu retorno/resultado é
    exibido e formatado em <li> -->

<div>
    <h2 v-for="nome in arrayNomes">
        {{ `${nome} está no índice ${arrayNomes.indexOf(nome)}` }}
    </h2>
</div>

<!-- Nesse outro exemplo podemos ver que temos alguma liberdade para trabalhar
    com "v-for" tanto criando um código JS interno mais completo como tendo
    ele em outras tags, tal qual o h2, p, várias outras e até mesmo img -->

<div>    
    <img v-for="image in imageURL" :src="image">
</div>

<!-- Nesse caso de img, altero uma propriedade interna à tag, como pode ver não
    há um bloco {{  }} apenas um "v-bind" em src onde vai meu valor dinâmico -->

<!-- Vamos criar na parte dois desse documento uma inserção de elementos 
    nesses arrays fazendo o uso de funções e do "reactive" -->

</template>

<style scoped>
</style>