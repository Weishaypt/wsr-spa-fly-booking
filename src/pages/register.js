const template = `
<base-layout>
    <div class="container vh-100 d-flex align-items-center justify-content-center">
    
        <section class="mt-5 w-75">
            <h2 class="mb-5 text-center">Registration</h2>
            <div v-if="success" class="alert alert-success d-block">
                Success registration! You will be redirected to login page!
            </div>
            <form action="#">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <input v-model="form.first_name" type="text" class="form-control test-2-name" placeholder="Frist name">
                        <div v-if="errors.first_name" class="invalid-feedback test-1-emfn">{{ errors.first_name }}</div>
                    </div>
                    <div class="col-12 mt-3 col-md-6 mt-md-0">
                        <input v-model="form.last_name" type="text" class="form-control test-2-last" placeholder="Last name">
                        <div v-if="errors.last_name" class="invalid-feedback test-2-emln">{{ errors.last_name }}</div>
                    </div>
                    <div class="col-12 mt-3 col-md-6">
                        <input v-model="form.document_number" type="text" class="form-control test-2-doc" placeholder="Document number">
                        <div v-if="errors.document_number" class="invalid-feedback test-2-emdn">{{ errors.document_number }}</div>
                    </div>
                    <div class="col-12 mt-3 col-md-6">
                        <input v-model="form.phone" type="text" class="form-control test-2-phone" placeholder="Phone">
                        <div v-if="errors.phone" class="invalid-feedback test-2-empn">{{ errors.phone }}</div>
                    </div>
                    <div class="col-12 mt-3 col-md-6">
                        <input v-model="form.password" type="password" class="form-control test-2-pass" placeholder="Password">
                        <div v-if="errors.password" class="invalid-feedback test-2-empw">{{ errors.password }}</div>
                    </div>
                    <div class="col-12 mt-3 col-md-6">
                        <input type="password" class="form-control test-2-pass2" placeholder="Password confirmation">
                        <div class="invalid-feedback test-2-empw2" style="display: none;">Error message</div>
                    </div>
                    <div class="col-12 mt-3">
                        <button class="btn btn-primary w-100 test-2-btn" @click="submit">Register now</button>
                        <div class="text-center mt-2">
                            Already have an account? <router-link :to="{name: 'login'}" class="test-2-blgn">Log in</router-link>
                            or
                            <router-link :to="{name: 'index'}" class="test-2-bbhm">Back home</router-link>
                        </div>
                    </div>
                </div>
            </form>
        </section>

    </div>
</base-layout>
`
export default {
    name: 'RegisterPage',
    template: template,
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                phone: '',
                document_number: '',
                password: ''
            },
            errors: {},
            success: false
        }
    },
    methods: {
        //Отправка данных
        submit(e) {
            e.preventDefault()

            this.errors = {}

            fetch(window._API_HOST_ + '/register', {
                body: JSON.stringify(this.form),
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }).then(res => {

                if(res.status === 422) {
                    res.json().then(data => {

                        if(res.status === 422) {
                            this.errors = data.error.errors
                        }
                    })
                }
                if(res.status === 204) {
                    this.success = true

                    setTimeout(() => {
                        this.$router.push({ name: 'login' })
                    }, 3000)
                }

            })
        }
    }
}