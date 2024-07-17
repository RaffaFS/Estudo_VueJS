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

<!-- Já vimos sobre estilos gerais anteriormente. Esse arquivo se destina a explicar 
    sobre estilos condicionais. Assim sendo, acima temos apenas o necessário de JS
    para montar um exemplo e logo abaixo o mesmo vale para a estrutura HTML -->

<div class="container">
    <div class="transfer_box">
        <h3 class="saldo">Saldo: {{ estado.saldo }}</h3>
        <h3 class="Transferir">Transferir: {{ estado.transferir }}</h3>
        <h3 class="novoSaldo">Saldo após a transferência: {{ exibeNovoSaldo() }}</h3>
        <input :class="{ invalido: 3 > 2 }" class="inputField" @keyup="transferindo" type="number" max="50000" placeholder="Valor da transferência">
        <input :class="{ invalido: estado.transferir > estado.saldo }" class="inputField" @keyup="transferindo" type="number" max="50000" placeholder="Valor da transferência">
        <input :class="{ invalido: !validaTransferencia() }" class="inputField" @keyup="transferindo" type="number" max="50000" placeholder="Valor da transferência">
    </div>
</div>

<!-- 1... Eu criei três exemplos, ou seja, três inputs, para que entendamos algumas
    coisas, o primeiro é apenas uma amostragem de como funciona o "estilo condicional",
    basicamente eu estou acrescentando uma classe, já pronta no CSS, ao meu elemento
    input conforme o cumprimento de uma condição. Poderíamos considerar isso um
    próximo nível do "toggle". -->

<!-- 2... Enquanto no primeiro elemento a condição é estática, pois 3 sempre será > 2
    no segundo exemplo temos uma amostragem mais real, onde usamos uma condição
    com valores mutáveis. Nesse caso a classe "invalido" só será aplicada ao 
    elemento quando o valor digitado para transferência ultrapassar o saldo atual -->

<!-- A sintaxe é basicamente um "v-bind simplificado", ":", como vimos anteriormente
    seguido de "class" que é o atributo dinâmico nesse caso e no valor dele temos
    { novaClasse: condição } -->

<!-- Além disso outra coisa interessante que podemos notar é que ":class" e "class" 
    são tratados de maneira independente -->

<!-- 3... O terceiro exemplo é mais uma maneira que temos de aplicar o estilo condicional,
    isso é, através de uma função, nesse caso, como a função "valida" a transferência,
    eu peço para que o estilo seja aplicado quando o retorno da função for false "!" -->

<!-- Isso é muito útil porque podemos utilizar essa função para diferentes fins,
    veremos isso na "parte dois" de estilos condicionais -->

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