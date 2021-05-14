<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 cabeza">
        <h1>CABECERA</h1>
      </div>
      <div class="col-lg-2 menu">
        <h2>MENU LATERAL:</h2>

          <router-link to="/" class="enlace">Inicio</router-link>                     <br> - <br>
          <router-link to="/servicio">Servicios</router-link>          <br> - <br>
          <router-link to="/Presupuesto">Presupuesto</router-link>     <br> - <br>
          <router-link to="/Contacto">Contacto</router-link>           <br> - <br>
          <router-link to="/login">Login</router-link>                 <br> - <br>
          <router-link to="/formulario">Formulario</router-link>       <br> - <br>
          <router-link to="/pruebas">Pruebas </router-link>            <br> - <br>
          <router-link to="/administrador">Administrador</router-link> 
          <hr>
          <h5>Usuarios:</h5><br>
          <router-link to="/administrador">Listar usuario</router-link> <br> 
          <router-link to="/administrador">Modificar usuario</router-link> <br> 
          <router-link to="/administrador">Eliminar usuario</router-link> <br> 
          <hr>
          <h5>Servicios:</h5><br>
          <router-link to="/administrador">Listar servicios</router-link> <br> 
          <router-link to="/administrador">Modificar servicios</router-link> <br> 
          <router-link to="/administrador">Eliminar servicios</router-link> <br> 
          <hr>
          <h5>Presupuestos:</h5><br>
          <router-link to="/administrador">Listar presupuestos</router-link> <br> 
          <router-link to="/administrador">Eliminar presupuestos</router-link>
      </div>
      <div class=" col-lg-10 centro">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  
}
</script>

<style lang="css" scoped>
.cabeza{
  color: white;
}
.menu{
  color: white;
  margin-top: 10px;
  background-color: #42b983;

}
.centro{
  color: white;
  background-color: rgb(95, 92, 92);
  margin-top: 10px;
}
.enlace{
  color: red;
}


/***+++++++++++++++++++++++++++++++++++++++++++++ */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/** verde:  color: #42b956; */
.navnav{
  background-color: #080808;
}
.container{

  margin-bottom: 5px;
 
}
#nav {
  padding: 30px;
  width: 80%;
  height: 120px;
}
#nav a {
  font-weight: bold;
  color: rgb(245, 245, 245);
}
/** verde:  color: #42b983; */
#nav a.router-link-exact-active {
  color: #42b983;
  
}
.cabeza{
    background-color: rgb(87, 90, 90);
}
.menu1{
    background-color: rgb(60, 189, 118);
}
.menu2{
    background-color: rgb(0, 189, 85);
}
.menu3{
    background-color: rgb(0, 189, 85);
}
.menu{
  background-color: #080808;
}
</style>