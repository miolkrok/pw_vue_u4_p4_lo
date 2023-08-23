<template>
  <div class="container">
    <h1>ELIMINAR ESTUDIANTE</h1>
    <div class="input-container">
      <label for="id">ID</label>
      <input v-model="id" type="text" id="id">
    </div>
    <button type="button" class="btn btn-outline-danger" @click="eliminarEstudiante">Eliminar</button>
  </div>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            id: null,
        };
    },
    methods: {
        async eliminarEstudiante() {
            const data = eliminarEstudianteFachada(this.id);
            console.log(data);
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