import routes from './routes.js'

Vue.use(VueRouter)

//Создаём роутер и включаем хистори мод
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router