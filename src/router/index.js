import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from './module_routes'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueMaterial)
import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
Vue.use(Router)
export default new Router({
    routes: ModuleRoutes.routes
})