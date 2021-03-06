const template = `
<base-layout>
    <div class="container">
        <section class="mt-5">

            <div class="d-flex justify-content-between align-items-start">
                <h2 class="mb-4">
                    Booking
                </h2>
                <a href="search.html" class="btn btn-sm btn-secondary test-5-bgoback">Back</a>
            </div>

            <div class="d-flex justify-content-between align-items-baseline mb-4">
                <h4>Flight information</h4>
            </div>

            <table class="table table-hover table-bordered">
                <tr>
                    <th>Flight</th>
                    <th>From where</th>
                    <th>Date and time of departure</th>
                    <th>To where</th>
                    <th>Flight time</th>
                    <th>Cost</th>
                </tr>
                <tr>
                    <td class="test-5-fc">{{ from.flight_code }}</td>
                    <td>
                        <span class="test-5-from-cn">{{ from.from.city }}</span>,
                        <span class="test-5-from-an">{{ from.from.airport }}</span> 
                    </td>
                    <td>
                        <span class="test-5-dd">{{ from.from.date }}</span>
                        at
                        <span class="test-5-dt">{{ from.from.time }}</span>
                    </td>
                    <td class="test-5-to">
                        <span class="test-5-to-cn">{{ from.to.city }}</span>,
                        <span class="test-5-to-an">{{ from.to.airport }}</span> 
                    </td>
                    <td class="test-5-at">{{ from.to.time }}</td>
                    <td class="test-5-fp">{{ from.cost }}</td>
                </tr>
                <tr>
                    <td class="test-5-fc">{{ to.flight_code }}</td>
                    <td>
                        <span class="test-5-from-cn">{{ to.from.city }}</span>,
                        <span class="test-5-from-an">{{ to.from.airport }}</span> 
                    </td>
                    <td>
                        <span class="test-5-dd">{{ to.from.date }}</span>
                        at
                        <span class="test-5-dt">{{ to.from.time }}</span>
                    </td>
                    <td class="test-5-to">
                        <span class="test-5-to-cn">{{ to.to.city }}</span>,
                        <span class="test-5-to-an">{{ to.to.airport }}</span> 
                    </td>
                    <td class="test-5-at">{{ to.to.time }}</td>
                    <td class="test-5-fp">{{ to.cost }}</td>
                </tr>
                <tr>
                    <td colspan="5" class="text-right">
                        <b>Total cost</b>
                    </td>
                    <td colspan="1" class="text-right test-5-price">{{ to.cost + from.cost }}</td>
                </tr>
            </table>
        </section>

        <section class="mt-5">
            <div class="d-flex justify-content-between align-items-baseline mb-4">
                <h4>Passengers</h4>
                <button class="btn btn-primary btn-sm test-5-add" @click="addPassenger">Add passenger</button>
            </div>

            <div action="booking_management.html">

                <div class="row" v-for="p in passengers">
                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
                        <input v-model="p.first_name" type="text" class="form-control test-5-name w-100" placeholder="First name">
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
                        <input v-model="p.last_name"  type="text" class="form-control test-5-last w-100" placeholder="Last name">
                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
                        <input v-model="p.birth_date" type="text" class="form-control test-5-dob" placeholder="Date of Birth">
                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
                        <input v-model="p.document_number"  type="text" class="form-control test-5-doc" placeholder="Document number">
                    </div>
                    <div class="col-12 col-xl-2 mt-3 mt-xl-0">
                        <button class="btn btn-danger btn-sm form-control test-5-bremove" @click="removePassenger(p._id)">Remove</button>
                    </div>
                </div>

                <button class="btn btn-success mt-4 form-control test-5-book" @click="confirm">Confirm</button>
            </div>
        </section>

    </div>
</base-layout>
`
export default {
    name: 'BookingPage',
    template: template,
    data() {
        return {
            to: {},
            from: {},
            passengers: []
        }
    },
    created() {
        this.to = JSON.parse(this.$route.query.back)
        this.from = JSON.parse(this.$route.query.to)
        this.addPassenger()
    },
    methods: {
        //Добавление пассажира
        addPassenger() {
            this.passengers.push({
                _id: Object.assign(Date.now()),
                first_name: '',
                last_name: '',
                birth_date: '',
                document_number: '',
            })
        },
        //Удаление пассажира
        removePassenger(_id) {
            if(this.passengers.length == 1) return;
            this.passengers = this.passengers.filter(p => p._id != _id);
        },
        confirm(e) {
            e.preventDefault()

            fetch(window._API_HOST_ + '/booking', {
                body: JSON.stringify({
                    flight_from: {
                        id: this.from.flight_id,
                        date: this.from.from.date
                    },
                    flight_back: {
                        id: this.to.flight_id,
                        date: this.to.from.date
                    },
                    passengers: this.passengers
                }),
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }).then(res => {
                res.json().then(data => {
                    this.$router.push({ name: 'booking_manage',
                        query: {
                            code: data.data.code
                        }
                    })
                })
            })
        }
    }
}