import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import '@/styles/reset.less'
import '@/utils/flexible'
const app = createApp(App)
app.use(router)

app.mount('#app')
