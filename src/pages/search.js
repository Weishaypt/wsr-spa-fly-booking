const template = `
<base-layout>
    <div class="container">
        <section class="mt-5">
            <div class="d-flex justify-content-between align-items-start">
                <h2 class="mb-4">
                    We found the following flights
                </h2>
                <router-link :to="{ name: 'index' }" class="btn btn-sm btn-secondary test-4-bback">Back</router-link>
            </div>

            <h5 class="mt-4 mb-3">
                <span class="test-4-fif1">Туда</span>
            </h5>
            <table class="table table-hover table-bordered">
                <tr>
                    <th>Flight</th>
                    <th>Aircraft</th>
                    <th>Date and time of departure</th>
                    <th>Arrival time</th>
                    <th>Flight time</th>
                    <th>Cost</th>
                </tr>
                <tr v-for="flight in listTo" @click="selectTo(flight.flight_id)" :class="{ 'selected': flight.flight_id == selectedTo }">
                    <td class="test-4-fn">{{ flight.flight_code }}</td>
                    <td class="test-4-at">Bombardier CRJ200</td>
                    <td>
                        <span class="test-4-dd">{{ flight.from.date }}</span>
                        at
                        <span class="test-4-dt">{{ flight.from.time }}</span>
                    </td>
                    <td class="test-4-aatime">{{ flight.to.time }}</td>
                    <td class="test-4-ft">
                        <span class="test-4-fhour"> {{ flight.to.time.split(':')[0] - flight.from.time.split(':')[0] }}</span>h
                        <span class="test-4-fminutes"> {{ flight.to.time.split(':')[1] - flight.from.time.split(':')[1] }}</span>min
                    </td>
                    <td class="test-4-fp">{{ flight.cost }}</td>
                </tr>
            </table>

            <h5 class="mt-4 mb-3">
                <span class="test-4-fif2">Обратно</span>
            </h5>
            <table class="table table-hover table-bordered">
                <tr>
                    <th>Flight</th>
                    <th>Aircraft</th>
                    <th>Date and time of departure</th>
                    <th>Arrival time</th>
                    <th>Flight time</th>
                    <th>Cost</th>
                </tr>
                <tr v-for="flight in listBack" @click="selectBack(flight.flight_id)" :class="{ 'selected': flight.flight_id == selectedBack }">
                    <td class="test-4-fn">{{ flight.flight_code }}</td>
                    <td class="test-4-at">Bombardier CRJ200</td>
                    <td>
                        <span class="test-4-dd">{{ flight.from.date }}</span>
                        at
                        <span class="test-4-dt">{{ flight.from.time }}</span>
                    </td>
                    <td class="test-4-aatime">{{ flight.to.time }}</td>
                    <td class="test-4-ft">
                        <span class="test-4-fhour"> {{ flight.to.time.split(':')[0] - flight.from.time.split(':')[0] }}</span>h
                        <span class="test-4-fminutes"> {{ flight.to.time.split(':')[1] - flight.from.time.split(':')[1] }}</span>min
                    </td>
                    <td class="test-4-fp">{{ flight.cost }}</td>
                   
                </tr>
            </table>

            <a @click="goToBooking" class="btn btn-primary test-4-bgobook mt-4">Go to booking</a>
        </section>

    </div>
</base-layout>
`
export default {
    name: 'SearchPage',
    template: template,
    data() {
        return {
            listTo: [],
            listBack: [],
            selectedTo: '',
            selectedBack: ''
        }
    },
    created() {
        this.loadList()
    },
    methods: {
        goToBooking(e) {
            e.preventDefault()

            this.$router.push({ name: 'booking',
                query: {
                    to: JSON.stringify(this.listTo.find(f => f.flight_id == this.selectedTo)),
                    back: JSON.stringify(this.listBack.find(f => f.flight_id == this.selectedBack))
                }
            })
        },
        selectTo(id) {
            this.selectedTo = id
        },
        selectBack(id) {
            this.selectedBack = id
        },

        loadList () {
            fetch(window._API_HOST_ + '/flight?' + new URLSearchParams(this.$route.query), {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },

            }).then(res => {
                res.json().then(data => {
                    this.listTo = data.data.flights_to
                    this.listBack = data.data.flights_back
                })
            })
        }
    }
}