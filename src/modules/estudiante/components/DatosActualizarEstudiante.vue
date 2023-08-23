<template>
  <div class="container">
    <h1>ACTUALIZAR ESTUDIANTE</h1>
    <div class="input-container">
      <label for="id">ID</label>
      <input v-model="id" type="text" id="id">
    </div>
    <div class="input-container">
      <label for="cedula">Cédula</label>
      <input v-model="cedula" type="text" id="cedula">
    </div>
    <div class="input-container">
      <label for="nombre">Nombre</label>
      <input v-model="nombre" type="text" id="nombre">
    </div>
    <div class="input-container">
      <label for="apellido">Apellido</label>
      <input v-model="apellido" type="text" id="apellido">
    </div>
    <button type="button" class="btn btn-outline-success" @click="actualizarEstudiante">Actualizar</button>
  </div>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            cedula: null,
            nombre: null,
            apellido: null

        };
    },
    methods: {
        async actualizarEstudiante() {
            const data={
                cedula:this.cedula,
                nombre:this.nombre,
                apellido:this.apellido,
                provincia:"Pichincha"
            }
            actualizarEstudianteFachada(data,this.id);
        },
    },
};
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  width: 100px;
  margin-right: 10px;
}

input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 5px 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>