<template>
  <div class="container">
    <h1>Ingrese un Vehiculo</h1>
    <div class="datos">
      <p type="Placa"><input v-model="placa" type="text" /></p>
      <p type="Marca"><input v-model="marca" type="text" /></p>
      <p type="Modelo"><input v-model="modelo" type="text" /></p>
      <p type="Color"><input v-model="color" type="text" /></p>
      <p type="Precio"><input v-model="precio" type="number" /></p>
    </div>
    <div class="boton">
      <button @click="guardar">Guardar</button>
    </div>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/clienteVehiculo.js";
export default {
  data() {
    return {
      placa: "",
      marca: "",
      modelo: "",
      color: "",
      precio: "",
    };
  },

  methods: {
    async guardar() {
      const bodyVehiculo = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };
      console.log(bodyVehiculo);
      const data = await guardarFachada(bodyVehiculo);
    },
   
  },
};
</script>

<style scoped>
p::before {
  content: attr(type);
  display: block;
}

input {
  pointer-events: stroke;
}
</style>
