const template = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <img src="assets/images/logo.png" class="logo test-0-logo" alt="logo">
            
            <div class="navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link test-0-nav-1" :to="{ name: 'index' }">Promotions</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link test-0-nav-2" :to="{ name: 'search' }">Search</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link test-0-nav-3" href="#">Check-in</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link test-0-nav-4" :to="{ name: 'login' }">Personal area</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
`
export default {
    name: 'b-header',
    template: template
}