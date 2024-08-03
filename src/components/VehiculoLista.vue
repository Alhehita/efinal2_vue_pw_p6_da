<template>
  <div class="container">
    <div class="boton">
      <button @click="listar">Consultar</button>
    </div>
    <div class="tabla">
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Accion</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detalle in detalles">
            <td>{{ detalle.placa }}</td>
            <td>{{ detalle.marca }}</td>
            <td>{{ detalle.modelo }}</td>
            <td><router-link class="a" to="/vehiculos">Ver</router-link></td>
            <td><button @click="borrar(detalle.id)">Borrar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { buscarTodosFachada } from "@/clients/clienteVehiculo.js";
import { eliminarFachada } from "@/clients/clienteVehiculo.js";

export default {
  data() {
    return {
      detalles: [],
    };
  },
  methods: {
    async listar() {
      const vehiculos = await buscarTodosFachada();
      if (vehiculos) {
        this.detalles = vehiculos;
      }
    },
    async borrar(id) {
      const borrar = await eliminarFachada(id);
      if (borrar) {
        // Remover el vehículo de la lista después de borrarlo
        this.detalles = this.detalles.filter((detalle) => detalle.id !== id);
      }
    },
  },
};
</script>

<style>
.boton {
  margin-top: 40px;
}

.tabla {
  margin-top: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.a {
  border: solid 1px black;
  margin: 10px 10px;
  padding: 10px;
  border-radius: 5px;
  background: beige;
}
</style>
