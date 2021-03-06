const template = `
<base-layout>
    <div class="container">
        <section class="mt-5">
            <div class="d-flex justify-content-between align-items-start">
                <h2 class="mb-4">
                    Welcome,
                    <span class="test-3-name">{{ user.first_name }}</span>
                    <span class="test-3-last">{{ user.last_name }}</span>
                </h2>
                <a class="btn btn-sm btn-secondary test-3-logout" @click="logout">Logout</a>
            </div>

            <p>Completed <span class="test-3-numflights">{{ user.number_of_flights }}</span> flights</p>
        </section>


        <section class="mt-5 upcoming">
            <h4 class="mb-4">Upcoming reservations</h4>

            <table class="table table-hover">
                <tr v-for="b in bookings">
                    <td>
                        <router-link class="test-3-code" :to="{ 'name': 'booking_manage', query: { code: b.code } }">{{ b.code }}</router-link>
                    </td>
                    <td>
                       
                        <template v-for="f in b.flights">
                            <span class="test-3-from">{{ f.from.city }}</span> -> <span class="test-3-to">{{ f.to.city }}</span>
                            <br>
                        </template>
                    </td>
                    <td>
                        <template v-for="f in b.flights">
                                Departure
                                <span class="test-3-d1">{{ f.from.date }}</span>
                                at
                                <span class="test-3-t1">{{ f.from.time }}</span>
        
                                <br>
                        </template>
                    </td>
                    <td>
                        <template v-for="f in b.flights">
                               Arrival at <span class="test-3-t2">{{ f.to.time }}</span>
                               <br/>
                        </template>
                    </td>
                </tr>
            </table>
        </section>

    </div>
</base-layout>
`
export default {
    name: 'ProfilePage',
    template: template,
    data() {
        return {
            user: {},
            bookings: []
        }
    },
    async mounted() {
        await this.fetchUser()
        await this.fetchBooking()
    },
    methods: {
        logout(e) {
            e.preventDefault()

            this.$store.token = ''
            localStorage.setItem('token', '')

            this.$router.push({ name: 'login' })
        },
        async fetchBooking() {
            fetch(window._API_HOST_ + '/user/booking', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.token
                },

            }).then(res => {

                if (res.status === 422 || res.status === 401) {
                    this.$router.push({name: 'login'})
                }
                if (res.status === 200) {
                    res.json().then(data => {
                        this.bookings = data.data.items
                    })
                }

            })
        },
        async fetchUser() {
            fetch(window._API_HOST_ + '/user', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.token
                },

            }).then(res => {

                if(res.status === 422 || res.status === 401) {
                    this.$router.push({ name: 'login' })
                }
                if(res.status === 200) {
                    res.json().then(data => {
                        this.user = data
                    })
                }

            })
        }
    }
}