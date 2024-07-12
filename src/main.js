// import './"./assets/main.css'
import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "./assets/vendor/boxicons/css/boxicons.min.css"
import "./assets/vendor/quill/quill.snow.css"
import "./assets/vendor/quill/quill.bubble.css"
import "./assets/vendor/remixicon/remixicon.css"
import "./assets/vendor/simple-datatables/style.css"
import "./assets/css/style.css"

import { createApp } from 'vue'
import App from './App.vue'

import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'

const app = createApp(App);
app.component('login-component', LoginComponent)
app.component('register-component', RegisterComponent);
app.mount('#app')
