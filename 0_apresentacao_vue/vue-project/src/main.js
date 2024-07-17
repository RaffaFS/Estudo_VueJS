import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// O main.js é outro arquivo que será criado automaticamente na instalação
// do Vue, e ele apenas gerencia/menciona/importa o app para o js para que
// esse possa rodar no browser

// createApp(App) é um comando para iniciar a criação do SPA, .mount('#app)
// diz que o app deve ser montado no elemento de id "app" do index.html