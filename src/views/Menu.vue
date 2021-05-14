<template>
 <div class="container">
    <div class="row">
      <div class="navnav">
          <div id="nav">
            <nav class="navbar navbar-expand-lg  navbar-expand-md navbar-expand-sm navbar-expand-xs ">
                <a href="http://127.0.0.1:5500/Inicio.html" class="navbar-brand">
                  <img src="data:image/png;base64,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" width="120px" height="60px">

                </a>
            
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mi-navbar" >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mi-navbar">
                <ul class="navbar-nav mr-auto"> <!--Empuja los elementos hacía la derecha, importante-->
                  <li class="nav-item active">
                    <a href="/" class="nav-link"></a>
                  </li>
                  <li class="nav-item dropdown">
                    <a href="/peticiones" class="nav-link dropdown-toggle" id="menu-categorias" data-toggle="dropdown" >
                      peticiones vue
                    </a>
                    <div class="dropdown-menu menu" >
                      <a href="/peticionespeticiones" class="dropdown-item">Sistema de riego</a>
                      <a href="/peticiones" class="dropdown-item">Podas</a>
                      <a href="/peticiones" class="dropdown-item">Cesped artificial</a>
                      <a href="/peticiones" class="dropdown-item">Desbroces</a>
                      <a href="/peticiones" class="dropdown-item">plantaciones</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a href="/Presupuesto" class="nav-link">Presupuesto</a>
                  </li>
                  <li class="nav-item">
                    <a href="/Contacto" class="nav-link">Contacto</a>
                  </li>

                  <li class="nav-item" v-if="$route.params.usuario === '@Administrador'">
                    <a href="/administrador" class="nav-link">Administrador</a>
                  </li>

                  <li class="nav-item">
                    <a href="/login" class="nav-link">Login</a>
          
                  </li>
                  <li class="nav-item">
                    <a href="/formulario" class="nav-link">Formulario</a>
          
                  </li>
                  <li class="nav-item">
                    <a href="/pruebas" class="nav-link" style="color: white">Pruebas</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
      </div>
      <router-view/>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/** verde:  color: #42b956; */
.navnav{
  background-color: black;
  color: black;
}
.container{
 color: red;
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

</style>