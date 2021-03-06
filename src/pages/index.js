const template = `
<base-layout>
    <div class="container">
        <section class="mt-5">
            <h2 class="mb-4">Flight search</h2>

            <form action="search.html">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
        
                        <select v-model="from" class="form-control test-0-fd w-100">
                            <option v-for="airport in airports" :value="airport.iata">{{ airport.name }}</option>
                        </select>

                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
                        <select v-model="to" class="form-control test-0-fa w-100">
                            <option v-for="airport in airports" :value="airport.iata">{{ airport.name }}</option>
                        </select>

                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
                        <input v-model="departing" type="text" class="form-control test-0-fdt" placeholder="Departing">

                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
                        <input v-model="returning" type="text" class="form-control test-0-fat" placeholder="Returning">

                    </div>
                    <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-1 mt-lg-0 pr-xl-0">
                        <select v-model="count" class="form-control test-0-fnp">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
 
                    </div>
                    <div class="col-12 col-xl-1 px-2 mt-3 mt-xl-0">
                        <button class="btn btn-success form-control test-0-fbs" @click="search">Search</button>
                    </div>
                </div>
            </form>
        </section>

        <section class="mt-5">
            <h2 class="mb-4">Promotions</h2>

            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card">
                        <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                        <div class="card-body">
                            <h5 class="card-title test-0-an">Promotion 1</h5>
                            <p class="card-text test-0-ad">Promotion text</p>
                            <a href="#" class="btn btn-primary test-0-abm">More</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card">
                        <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                        <div class="card-body">
                            <h5 class="card-title test-0-an">Promotion 1</h5>
                            <p class="card-text test-0-ad">Promotion text</p>
                            <a href="#" class="btn btn-primary test-0-abm">More</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card">
                        <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                        <div class="card-body">
                            <h5 class="card-title test-0-an">Promotion 1</h5>
                            <p class="card-text test-0-ad">Promotion text</p>
                            <a href="#" class="btn btn-primary test-0-abm">More</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card">
                        <img src="assets/images/placeholder.jpg" class="card-img-top test-0-ai" alt="...">
                        <div class="card-body">
                            <h5 class="card-title test-0-an">Promotion 1</h5>
                            <p class="card-text test-0-ad">Promotion text</p>
                            <a href="#" class="btn btn-primary test-0-abm">More</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        <section class="mt-5">
            <h2 class="mb-4">Subscribe</h2>

            <form action="#">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <input type="email" class="form-control test-0-sie" placeholder="example@domain.com">
                    </div>
                    <div class="col-12 col-md-6">
                        <button class="btn btn-success w-100 test-0-sbs">Subscribe</button>
                    </div>
                </div>
            </form>
        </section>
    </div>
</base-layout>
`
export default {
    name: 'IndexPage',
    template: template,
    data() {
        return  {
            from: '',
            to: '',
            departing: '',
            returning: '',
            count: 1,
            airports: []
        }
    },
    created() {
        //Загружаем аэропорты
        this.loadAirports()
    },

    methods: {
        //Выполняем поиск
        search (event) {
            event.preventDefault();

            let query = {}
            if(this.from) query.from = this.from
            if(this.to) query.to = this.to
            if(this.departing) query.date1 = this.departing
            if(this.returning) query.date2 = this.returning
            if(this.count) query.passengers = this.count

            this.$router.push({ name: 'search',
                query: query
            })
        },
        //Метод загрузки аэропортов
        loadAirports() {
            fetch(window._API_HOST_ + '/airport', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                },

            }).then(res => {
                res.json().then(data => {
                    this.airports = data.data.items;
                    this.airports.push({
                        name: 'Не выбран',
                        iata: ''
                    })

                })
            })
        }
    }
}