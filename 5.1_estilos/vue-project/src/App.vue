<script setup>
import {reactive} from 'vue';

const estado = reactive({
    contador: 0,
    nome1: '',
})
function incrementar(){
    estado.contador++;
}
function decrementar(){
    estado.contador--;
}
function atualizar(elemento){
    estado.nome1 = elemento.target.value
}

// Esse documento trata de "estilização no Vue". Tudo dentro de "scripts"
// e quase tudo dentro de "template" são pedaços de códigos utilizados 
// em "módulos" anteriores, sobre as partes de JS e HTML (respectivamente) 
// dentro do Vue

</script>

<template>

<!-- Aqui notaremos algumas diferenças estruturais em relação ao que 
    estávamos acostumados nos últimos arquivos, pois já que aqui
    trataremos de estilos, é importante que nosso HTML esteja bem
    estruturado, organizado, e com as devidas classes e/ou ids -->

<div class="container">
    <div class="box">
        <div class="text_box">
            <h2 class="separador">---SEPARADOR---</h2>
            <p class="dinamic_element">{{ estado.contador }}</p>
        </div>
        <div class="att_box">
            <button @click="incrementar" type="button">+</button>
            <button @click="decrementar" type="button">-</button>
        </div>
    </div>    
    <div class="box">
        <div class="text_box">
            <h2 class="separador">---SEPARADOR---</h2>
            <p class="dinamic_element">{{ estado.nome1 }}</p>
        </div>
        <div class="att_box">
            <input @keyup="atualizar" type="text" placeholder="Exemplo1">
            <input @change="atualizar" type="text" placeholder="Exemplo2">
        </div>
    </div>
</div>

</template>

<style scoped>

/* Então acima está um exemplo de estruturação de HTML dentro do Vue para
    receber um estilo e abaixo as regras de estilo, tal qual um CSS
    convencional, mencionando classes e tags mas sem identação */

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}
.container{
    max-width: 720px;
    text-align: center;
    margin: 0 auto;
    margin-top: 64px;
    background-color: #076;
    padding: 64px;
    border-radius: 16px;
}
.box{
    margin-bottom: 32px;
}
.separador{
    background-color: #666;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    letter-spacing: 2px;
    margin-bottom: 16px;
}
.dinamic_element{
    font-size: 40px;
    background-color: #004;
    color: #fff;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px
}
.att_box{
    display: flex;
    justify-content: center;
    gap: 16px;
}
button{
    padding: 4px;
    font-size: 24px;
}
input{
    padding: 4px;
    font-size: 24px;
}
</style>
