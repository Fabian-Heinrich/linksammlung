import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import Admin from './Admin.vue'


const adminApp = createApp(Admin).mount('#admin')
