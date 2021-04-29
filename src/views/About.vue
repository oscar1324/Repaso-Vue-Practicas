<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>¿Hola?  --- {{motivo}}</p>
  </div>
</template>

<script>
export default {
  data() {
     return{
       motivo: 'volvemos con vue'
     }
  }
}
</script>
