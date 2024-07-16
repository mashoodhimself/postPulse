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

import { createRouter, createWebHistory } from 'vue-router';

import LoginComponent from './components/LoginComponent.vue'
import RegisterComponent from './components/RegisterComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import ProfileComponent from './components/ProfileComponent.vue'
import CreatePressReleaseComponent from './components/CreatePressReleaseComponent.vue'
import PreviewPressReleaseComponent from './components/PreviewPressReleaseComponent.vue'
import EditPressReleaseComponent from './components/EditPressReleaseComponent.vue'
import CheckoutComponent from './components/CheckoutComponent.vue'
import PackageComponent from './components/PackageComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/login', component:LoginComponent},
        {path: '/register', component:RegisterComponent},
        {path: '/dashboard', component:DashboardComponent},
        {path: '/profile', component:ProfileComponent},
        {path: '/create/pressrelease', component:CreatePressReleaseComponent},
        {path: '/packages', component:PackageComponent},
        {path: '/preview/pressrelease', component:PreviewPressReleaseComponent},
        {path: '/edit/pressrelease', component:EditPressReleaseComponent},
        {path: '/checkout/pressrelease', component:CheckoutComponent},
    ]
});


const app = createApp(App);

app.use(router);
app.mount('#app');
