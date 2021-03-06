const template = `
<base-layout>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">

                <div class="passengers">
                    <h2>Choose where the passengers will sit</h2>

                    <table class="table table-bordered">
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Seat</th>
                        </tr>
                        <tr v-for="p in passengers">
                            <td class="test-90-name">{{ p.first_name }}</td>
                            <td class="test-90-last">{{ p.last_name }}</td>
                            <td>
                                <span class="test-90-seat">{{ p.place_from }}</span>
                                <button class="btn btn-secondary ml-3 test-90-bselect" @click="selectMode = p.id">Select</button>
                            </td>
                        </tr>
                    </table>

                    <a @click="back" class="btn test-90-bback btn-secondary">Back</a>
                    <a @click="confirm" class="btn test-90-bconfirm btn-success">Confirm</a>
                </div>

            </div>
            <div class="col-12 col-md-8 d-flex justify-content-center align-items-center">

                <div class="scheme">
                    <!-- letters -->
                    <div class="d-flex mb-2">
                        <div class="number"></div>
                        <div class="d-flex mr-3">
                            <div class="letter">A</div>
                            <div class="letter">B</div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="letter">C</div>
                            <div class="letter">D</div>
                        </div>
                        <div class="number"></div>
                    </div>
                    <!-- / letters -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">1</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-1a"></div>
                            <div class="seat test-100-1b"></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-1c"></div>
                            <div class="seat test-100-1d"></div>
                        </div>
                        <div class="number">1</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">2</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-2a "></div>
                            <div class="seat test-100-2b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-2c"></div>
                            <div class="seat test-100-2d"></div>
                        </div>
                        <div class="number">2</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">3</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-3a "></div>
                            <div class="seat test-100-3b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-3c"></div>
                            <div class="seat test-100-3d"></div>
                        </div>
                        <div class="number">3</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">4</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-4a "></div>
                            <div class="seat test-100-4b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-4c"></div>
                            <div class="seat test-100-4d"></div>
                        </div>
                        <div class="number">4</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">5</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-5a "></div>
                            <div class="seat test-100-5b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-5c"></div>
                            <div class="seat test-100-5d"></div>
                        </div>
                        <div class="number">5</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">6</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-6a "></div>
                            <div class="seat test-100-6b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-6c"></div>
                            <div class="seat test-100-6d"></div>
                        </div>
                        <div class="number">6</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">7</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-7a "></div>
                            <div class="seat test-100-7b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-7c"></div>
                            <div class="seat test-100-7d"></div>
                        </div>
                        <div class="number">7</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">8</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-8a "></div>
                            <div class="seat test-100-8b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-8c"></div>
                            <div class="seat test-100-8d"></div>
                        </div>
                        <div class="number">8</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">9</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-9a "></div>
                            <div class="seat test-100-9b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-9c"></div>
                            <div class="seat test-100-9d"></div>
                        </div>
                        <div class="number">9</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">10</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-10a "></div>
                            <div class="seat test-100-10b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-10c"></div>
                            <div class="seat test-100-10d"></div>
                        </div>
                        <div class="number">10</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">11</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-11a "></div>
                            <div class="seat test-100-11b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-11c"></div>
                            <div class="seat test-100-11d"></div>
                        </div>
                        <div class="number">11</div>
                    </div>
                    <!-- / row -->

                    <!-- row -->
                    <div class="d-flex mb-2">
                        <div class="number">12</div>
                        <div class="d-flex mr-3">
                            <div class="seat test-100-12a "></div>
                            <div class="seat test-100-12b "></div>
                        </div>
                        <div class="d-flex ml-3">
                            <div class="seat test-100-12c"></div>
                            <div class="seat test-100-12d"></div>
                        </div>
                        <div class="number">12</div>
                    </div>
                    <!-- / row -->

                </div>

            </div>
        </div>
    </div>
</base-layout>
`
export default {
    name: 'SeatPage',
    template: template,
    data() {
        return {
            code: '',
            passengers: [],
            selectMode: -1
        }
    },
    created() {
        this.code = this.$route.query.code
        this.passengers = JSON.parse(this.$route.query.passengers)

    },
    mounted() {
        document.querySelectorAll('.seat').forEach(el => el.addEventListener('click', this.selectSeat))

        this.passengers.forEach(p => {
            if(p.place_from) {
                document.querySelector('.test-100-' + p.place_from.toLowerCase()).classList.add('seat-selected')
            }
        })
    },
    destroy() {
        document.querySelectorAll('.seat').forEach(el => el.removeEventListener('click', this.selectSeat))
    },
    methods: {
        selectSeat(e) {
            let el = e.target
            if(this.selectMode == -1 || e.target.classList.contains('seat-selected')) return;
            let seat = el.classList.item(1).split('-')[2].toUpperCase()

            if(this.passengers.find(p => p.id == this.selectMode).seat) {
                document.querySelector('.test-100-' + this.passengers.find(p => p.id == this.selectMode).seat.toLowerCase()).classList.remove('seat-selected')
            }

            this.passengers.find(p => p.id == this.selectMode).seat = seat

            el.classList.add('seat-selected')


            this.selectMode = -1;
        },
        back(e) {
            e.preventDefault()

            this.$router.push({
                name: 'booking_manage',
                query: {
                    code: this.code
                }
            })

        },
        confirm(e) {
            e.preventDefault()

            this.passengers.forEach(p => {
                if(!p.seat) return;

                fetch(window._API_HOST_ + '/booking/' + this.code + '/seat', {
                    body: JSON.stringify({
                        passenger: p.id,
                        seat: p.seat,
                        type: 'from'
                    }),
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                }).then(res => {
                    res.json().then(data => {

                    })
                })
            })

            this.$router.push({
                name: 'booking_manage',
                query: {
                    code: this.code
                }
            })
        }
    }
}