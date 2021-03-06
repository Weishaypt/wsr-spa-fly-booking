import router from "./router/index.js";
import './components/index.js'
import './plugins/index.js'
const store = {
    token: localStorage.getItem('token'),
}
//АПИ ХОСТ
window._API_HOST_ = 'http://webnations.ru/api'

Vue.prototype.$store = store
const app = window.app = new Vue({
    router
}).$mount('#root')
