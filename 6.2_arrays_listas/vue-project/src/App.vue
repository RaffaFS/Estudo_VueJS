<script setup>
import {reactive} from 'vue';

// Já vimos a base da construção desse código e sobre o funcionamento
// geral de "v-for". Agora, colocando tudo dentro de um reactive, criando
// funções e fazendo uso de "v-model" para obter os valores dos inputs,
// vamos atualizar os arrays e, paralelamente, o display da página

const estado = reactive({
    arrayNomes: ['Rafael', 'Lucas', 'Michele', 'Adir'],
    imageURL: ['https://via.placeholder.com/150', 'https://via.placeholder.com/200', 'https://via.placeholder.com/250'],
    novoNome: '',
    novaImagem: ''
})

// Como pode ver acima, e relembrar, o que antes eram constantes passam
// para dentro do reactive basicamente como atributos. Além disso, criei
// um atributo para o armazenamento do valor de cada um dos inputs que 
// teremos.

// Lembrando que o reactive é necessário tanto para que os atributos 
// atrelados aos inputs tenham seus valores atualizados em tempo real e 
// constantemente (em relação a "novoNome" e "novaImagem"), quanto para
// que o display em tela dos elementos dos arrays seja também atualizado
// da mesma forma (em relação a "arrayNomes" e "imageURL").

function attNome(){
    if(estado.novoNome.length >= 3){
        estado.arrayNomes.push(estado.novoNome)
        estado.novoNome = ''
    }
}

// O valor de "novoNome" está atrelado ao valor do primeiro input, sendo
// assim, sempre que uso "estado.novoNome", estou usando o valor atual
// do primeiro input. O código verifica se o valor atual possui ao menos
// 3 letras e, se sim, empurra ele para dentro de "arrayNomes" na última
// posição e depois limpa o campo atualizando o valor atrelado para ''

function attImagem(){
    if(estado.novaImagem){
        estado.imageURL.push(estado.novaImagem)
        estado.novaImagem = ''
    }
}

// Aqui acontece basicamente o que acontece na função acima, a diferença
// é que os links incluídos em imageURL são utilizados no src de elementos
// img, enquanto os nomes são innerText de elementos h2

</script>

<template>

<div>
    <h2 v-for="nome in estado.arrayNomes">
        {{ `${nome} está no índice ${estado.arrayNomes.indexOf(nome)}` }}
    </h2>
</div>

<div>    
    <img v-for="image in estado.imageURL" :src="image">
</div>

<!-- Acima temos apenas os bloquinhos de v-for que já tinhamos antes -->

<div>
    <input type="text" v-model="estado.novoNome">
    <button type="button" @click="attNome">+ Nome</button>
</div>

<div>
    <input type="text" v-model="estado.novaImagem">
    <button type="button" @click="attImagem">+ Imagem</button>
</div>

<!-- Aqui definimos um input e um botão para a captação de cada tipo
    de valor. Para cada input utilizamos um v-model, que é o que atrela
    o valor do input ao valor da propriedade/atributo mencionado. Para
    cada botão definimos uma função diferente a partir do evento de click. -->

</template>

<style scoped>
</style>