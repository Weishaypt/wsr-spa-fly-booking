const template = `
    <footer class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <span class="test-0-phone">8 (800) 100-10-10</span>
                </div>
                <div class="col-7 offset-2">
                    <div class="d-flex justify-content-between">

                        <router-link :to="{ name: 'index' }">Home</router-link>
                        <router-link :to="{ name: 'login' }">Log in</router-link>
                        <router-link :to="{ name: 'register' }">Registration</router-link>
                        <a href="http://xxxxxx-m1.wsr.ru/contact">Contact</a>
                        <a href="http://xxxxxx-m1.wsr.ru/news">News</a>
                        <a href="http://xxxxxx-m1.wsr.ru/return">Return</a>
                        <a href="http://xxxxxx-m1.wsr.ru/feedback">Feedback</a>

                    </div>
                </div>
            </div>
        </div>
    </footer>
`
export default {
    name: 'b-footer',
    template: template
}