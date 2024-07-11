import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'

const app = createApp(App);
app.component('login-component', LoginComponent)
app.component('register-component', RegisterComponent);
app.mount('#app')
