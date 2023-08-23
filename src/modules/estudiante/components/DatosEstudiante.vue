<template>
    <div class="container">
        <h1>Consultar Estudiante</h1>
        <div class="input-container">
            <label for="cedula">Cédula</label>
            <input v-model="cedula" type="text" id="cedula">
            <button type="button" class="btn btn-secondary" @click="consultarEstudiante">Consultar</button>
        </div>
        <div class="input-container">
            <label for="nombre">Nombre</label>
            <input v-model="nombre" type="text" id="nombre" disabled>
        </div>
        <div class="input-container">
            <label for="apellido">Apellido</label>
            <input v-model="apellido" type="text" id="apellido" disabled>
        </div>
    </div>
</template>


<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js"
export default {
    data() {
        return {
            cedula: this.$route.params.cedula,
            //cedula: null,
            nombre: null,
            apellido: null

        };
    },
    methods: {
        async consultarEstudiante() {
            const data = await obtenerEstudianteFachada(this.cedula);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
            console.log(data)
        },
    },
    mounted() {
        const { cedula } = this.$route.params;
        console.log(this.$route);
        const ciu= this.$route.query.ciudad;
        const {ciudad} =this.$route.query
        console.log(ciu);
        console.log(ciudad);
        console.log(cedula);
        this.cedula = cedula;
        this.consultarEstudiante();
        
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
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

input:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
}
</style>