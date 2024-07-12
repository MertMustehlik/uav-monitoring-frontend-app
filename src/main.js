import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
