import IndexPage from '../pages/index.js'
import SearchPage from '../pages/search.js'
import ProfilePage from '../pages/profile.js'
import LoginPage from '../pages/login.js'
import RegisterPage from '../pages/register.js'
import BookingPage from '../pages/booking.js'
import BookingManagePage from '../pages/booking_manage.js'
import SeatPage from '../pages/seat.js'


//Список роутов приложения
export default [
    { path: '/', name: 'index', component: IndexPage },
    { path: '/search', name: 'search', component: SearchPage },
    { path: '/profile', name: 'profile', component: ProfilePage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'register', component: RegisterPage },
    { path: '/booking', name: 'booking', component: BookingPage },
    { path: '/booking_manage', name: 'booking_manage', component: BookingManagePage },
    { path: '/seat', name: 'seat', component: SeatPage },
]