<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<!-- Um arquivo Vue é dividido em basicamente 3 partes, a primeira delas é o script
    que está logo acima, o script comummente vai importar "componentes" da pasta
    "components", que veremos mais à frente. Também é aqui que escreveremos nosso
    código geral do App -->

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<!-- A segunda parte de um arquivo Vue costuma ser o template, aqui é onde faremos
    a criação do html geral e também onde faremos o uso dos componentes importados
    pelo script. Basicamente utilizamos eles como tags únicas e com estilos já
    definidos atributos personalizáveis a partir do respectivo "arquivo.vue" -->

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<!-- A terceira parte de um arquivo Vue costume ser o style, que é basicamente 
    onde fazemos um desenvolvimento dos estilos da página e elementos em questão
    com o uso do CSS vanilla -->