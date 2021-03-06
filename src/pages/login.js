const template = `
<base-layout>
    <div class="container vh-100 d-flex align-items-center justify-content-center">
    
        <section class="mt-5 w-75">
            <h2 class="mb-5 text-center">Log in</h2>

            <form action="profile.html">
                <div class="row">
                    <div class="col-12">
                        <!-- is-invalid class show error message -->
                        <input v-model="form.phone" type="text" class="form-control test-1-fpn" placeholder="Phone">
                        <div v-if="errors.phone" class="invalid-feedback test-1-emph">{{ errors.phone }}</div>
                    </div>
                    <div class="col-12 mt-2">
                        <input v-model="form.password" type="password" class="form-control test-1-fps" placeholder="Password">
                        <div v-if="errors.password" class="invalid-feedback test-1-emps">{{ errors.password }}</div>
                    </div>
                    <div class="col-12 mt-4">
                        <button class="btn btn-primary w-100 test-1-fbs" @click="submit">Log in</button>
                        <div class="text-center mt-2">
                            Don't have an account yet? <router-link :to="{name: 'register'}" class="test-1-bsu">Sign up</router-link>
                            or
                            <router-link :to="{name: 'index'}" class="test-1-bbh">Back home</router-link>
                        </div>
                    </div>
                </div>
            </form>
        </section>

    </div>
</base-layout>
`
export default {
    name: 'LoginPage',
    template: template,
    data() {
        return {
            form: {
                phone: '',
                password: ''
            },
            errors: {}
        }
    },
    methods: {
        //Отправка данных
        submit(e) {
            e.preventDefault()

            this.errors = {}

            const self = this
            fetch(window._API_HOST_ + '/login', {
                body: JSON.stringify(this.form),
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }).then(res => {

                if(res.status === 422 || res.status === 401) {
                    res.json().then(data => {

                        this.errors = data.error.errors
                    })
                }

                if(res.status === 200) {
                    res.json().then(data => {
                        self.$store.token = data.data.token
                        localStorage.setItem('token', data.data.token)
                        this.$router.push({ name: 'profile' })
                    })
                }

            })
        }
    }
}