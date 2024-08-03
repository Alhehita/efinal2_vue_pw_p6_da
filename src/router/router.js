import { createRouter, createWebHashHistory } from 'vue-router'
import vehiculos from '../page/VehiculosPage.vue'
import vehiculosLista from '../page/VehiculosListaPage.vue'
import crearVehiculo from '../page/CrearVehiculoPage.vue'

const routes = [
  {
    path: '/crearvehiculos',
    component: crearVehiculo
  },
  {
    path: '/vehiculos',
    component: vehiculos
  },
  {
    path: '/detalles',
    component:vehiculosLista
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
