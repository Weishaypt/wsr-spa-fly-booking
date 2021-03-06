const template = `
<base-layout>
    <div class="container">
        <section class="mt-5">
            <div class="d-flex justify-content-between align-items-start">
                <h2 class="mb-4">
                    Booking <span class="test-6-code">{{ booking.code }}</span>
                </h2>
                <router-link :to="{name: 'index'}" class="btn btn-sm btn-secondary test-6-gohome">Home</router-link>
            </div>

            <p>Booking cost: <span class="test-6-tp">{{ booking.cost }}</span></p>
            
            <div class="d-flex justify-content-between align-items-baseline mt-5 mb-2">
                <h4>Flight information</h4>
            </div>

            <table class="table table-hover table-bordered">
                <tr>
                    <th>Flight</th>
                    <th>Aircraft</th>
                    <th>From where</th>
                    <th>Date and time of departure</th>
                    <th>To where</th>
                    <th>Arrival time</th>
                    <th>Flight time</th>
                </tr>
                <tr v-for="f in booking.flights">
                    <td class="test-6-fc">{{ f.flight_code }}</td>
                    <td class="test-6-ac">Bombardier CRJ200</td>
                    <td class="test-6-from">{{ f.from.city }}</td>
                    <td>
                        <span class="test-6-dd">{{ f.from.date }}</span>
                        at
                        <span class="test-6-dt">{{ f.from.time }}</span>
                    </td>
                    <td class="test-6-to">{{ f.to.city }}</td>
                    <td class="test-6-at">{{ f.to.time }}</td>
                    <td class="test-6-ft">
                        <span class="test-6-fhour"> {{ f.to.time.split(':')[0] - f.from.time.split(':')[0] }}</span>h
                        <span class="test-6-fminutes"> {{ f.to.time.split(':')[1] - f.from.time.split(':')[1] }}</span>min
                    </td>
                </tr>

            </table>

            <div class="d-flex justify-content-between align-items-baseline mt-5 mb-4">
                <h4>Passengers</h4>
            </div>
            
            <table class="table table-hover">
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Date of Birth</th>
                    <th>Document number</th>
                    <th>Seat</th>
                </tr>
                <tr v-for="p in booking.passengers">
                    <td class="test-6-name">{{ p.first_name }}</td>
                    <td class="test-6-last">{{ p.last_name }}</td>
                    <td class="test-6-dob">{{ p.birth_date }}</td>
                    <td class="test-6-doc">{{ p.document_number }}</td>
                    <td class="test-6-seat">{{ p.place_from }}</td>
                </tr>

            </table>

            <a @click="selectSeats" class="btn btn-primary test-6-select">Select seats</a>

        </section>
        
    </div>
</base-layout>
`
export default {
    name: 'BookingManagePage',
    template: template,
    data() {
        return {
            code: '',
            booking: {}
        }
    },
    created() {
        this.code = this.$route.query.code

        this.loadBooking()
    },
    methods: {
        selectSeats(e) {
            e.preventDefault()

            this.$router.push({ name: 'seat',
                query: {
                    code: this.code,
                    passengers: JSON.stringify(this.booking.passengers)

                }
            })
        },
        loadBooking() {
            fetch(window._API_HOST_ + '/booking/' + this.code, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }).then(res => {
                res.json().then(data => {
                    this.booking = data.data
                })
            })
        }
    }
}