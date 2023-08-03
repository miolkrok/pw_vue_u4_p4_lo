<template>
    <div>
      <router-link to="/consultar">Consultar</router-link>
      <router-link to="/guardar">Guardar</router-link>
      <router-link to="/actualizar">Actualizar</router-link>
      <router-link to="/eliminar">Eliminar</router-link>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  div {
      padding: 0 30px;
      background-color: aliceblue;
  
  }
  div a {
      font-weight: bold;
      /*color: #2c3e50;*/
      color: #6576b4;
      margin: 0 10px;
  }
  </style>