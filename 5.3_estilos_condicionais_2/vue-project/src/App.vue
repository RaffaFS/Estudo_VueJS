<script setup>
import {reactive} from 'vue';

const estado = reactive({
    saldo: 5000,
    transferir: 0
})

function transferindo(elemento){
    estado.transferir = elemento.target.value
}
function exibeNovoSaldo(){
    return estado.saldo - estado.transferir
}
function validaTransferencia(){
    return estado.saldo >= estado.transferir
}

</script>

<template>

<!-- Já vimos sobre estilos condicionais o na "parte 1" desse documento
    (na pasta anterior), aqui veremos apenas sobre uma sintaxe específica
    para utilizarmos os estilos condicionais, a sintaxe de função -->

<div class="container">
    <div class="transfer_box">
        <h3 class="saldo">Saldo: {{ estado.saldo }}</h3>
        <h3 class="Transferir">Transferir: {{ estado.transferir }}</h3>
        <h3 class="novoSaldo">Saldo após a transferência: {{ exibeNovoSaldo() }}</h3>
        <input :class="{ invalido: 3 > 2 }" class="inputField" @keyup="transferindo" type="number" max="50000" placeholder="Valor da transferência">
        <input :class="{ invalido: estado.transferir > estado.saldo }" class="inputField" @keyup="transferindo" type="number" max="50000" placeholder="Valor da transferência">
        <input :class="{ invalido: !validaTransferencia() }" class="inputField" @keyup="transferindo" type="number" max="50000" placeholder="Valor da transferência">
        <button v-if="validaTransferencia()">Transferir</button>
        <span v-else>Valor não disponível</span>
    </div>
</div>

<!-- Mantive os exemplos anteriores mas aqui falaremos em especial do
    terceiro input e o que vem depois dele para exemplificar uma situação
    mais específica -->

<!-- Como podemos ver, utilizando uma função, conseguimos "com o mesmo
    retorno" trabalhar com mais de um elemento sem precisar reescrever
    condições para cada elemento -->

<!-- Nesse caso em específico utilizo o que aprendemos em "3.1_rend_condicional"
    com o "v-if", ou seja, o botão só será renderizado enquanto o retorno da
    função for "true", quando passar a não mais ser, caímos para o "v-else"
    e a mensagem de span é renderizada e, ao mesmo tempo, a classe "invalido" é
    aplicado pela condição do input anterior -->

<!-- Outra coisa interessante que não foi citada anteriormente é o fato de
    que podemos, dentro de ":class" podemos criar mais de uma classe
    condicional, basta que adicionemos: ", novaClasse: nova condição" -->

</template>

<style scoped>

.inputField{
    padding: 4px;
    border-radius: 8px;
    border-color: blue;
}

.invalido{
    outline-color: red;
    border-color: red;
}

</style>