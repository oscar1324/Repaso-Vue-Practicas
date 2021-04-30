<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-xs-12">
                <h1><b>Bienvenido a la sección de peticiones</b></h1>
                <h3>Peticiones con placehorder:</h3>
                <button type="button" class="btn btn-danger" @click="sacarUsuarios()">Sacar Usuarios</button> -
                <button type="button" class="btn btn-danger" @click="sacarPost()">Sacar Posts</button> -
                <button type="button" class="btn btn-danger" @click="eliminarUsuarios()">Eliminar Users</button>
                
                <hr>

                <div class="ol-lg-12">
                <h3>Peticiones con json-server jugadores:</h3>
                <button type="button" class="btn btn-primary" @click="sacarJugadores()">Sacar Jugadores</button> -
                <button type="button" class="btn btn-primary" @click="anadirJugadores()">Añadir Jugadores</button> -
                <button type="button" class="btn btn-danger" @click="eliminarUnJugador()">Eliminar 14</button> 

                </div>
                <hr>
                <div class="col-lg-12">
                    <ul v-for="cadaUsuario, index in array" :key="index" class="ul1">
                        <li> nombre: {{cadaUsuario.name}} {{cadaUsuario.username}} / email: {{cadaUsuario.email}}</li>
                    </ul>
                    <ul v-for="cadaPost, index in arrayPosts" :key="index" class="ul2">
                        <li>Post número {{cadaPost.id}} - {{cadaPost.title}} </li>
                    </ul>
                </div>

                <div class="col-lg-12">
                    <table class="tt">
                        <tr  class="tt">
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Pais</th>
                            <th>Altura</th>
                            <th>Eliminar</th>
                            <th>Actualizar</th>
                            <th>
                            Envio bb
                            </th>
                        </tr>

                        <tr  class="tt" v-for="cadaJugador, index in arrayJugadores" :key="index">
                            <td>{{cadaJugador.id}}</td>
                            <td>{{cadaJugador.nombre}}</td>
                            <td>{{cadaJugador.apellido}}</td>
                            <td>{{cadaJugador.edad}}</td>
                            <td>{{cadaJugador.pais}}</td>
                            <td>{{cadaJugador.altura}}</td>
                            <td><button type="button" class="btn btn-danger" @click="eliminarJugador(cadaJugador.id)">Eliminar</button></td>
                            <td> <button type="button" class="btn btn-primary" @click="actualizarJugador(cadaJugador.id)">Actualizar jugador</button></td>
                            <td>
                                <button type="button" class="btn btn-success" @click="pasarDato(cadaJugador.pais)">Envio Dato a hijo</button>
                            </td>
                            
                        </tr>
                    </table>
                </div>
                <hr>

                <div>
                <!-- Leer desde aquí, ver comunicación con el hijo: peticionbebe.vue -->
                <p>Componente hijo:</p>
                <peticionbebe :nombrePais="variable"></peticionbebe>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import peticionbebe from '../components/Peticionbebe.vue';
import axios from 'axios';

export default {

    data(){
        return{
            condición: false,
            array: [],
            arrayPosts: [],
            arrayJugadores:[],
            jugador : {
                nombre: 'Alba',
                apellido: 'Mureil',
                edad:19,
                pais:'España',
                altura: '173 cm'
            },
            jugadorActualizado : {
                nombre: 'Óscar',
                apellido: 'Izquierdo',
                edad:21,
                pais:'España',
                altura: '187 cm'
            },
            nombrePlayer: '',
            variable: ''
        }
    },
    components: {peticionbebe},
    methods: {

        // Pasar dato a hijo
        pasarDato(dato){
            console.log("Papa pasa a hijo: " + dato);
            this.variable = dato;
        },

        //----------------------------------------------------------------

        sacarUsuarios(){
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then( response => {
                this.array = response.data;
                console.log(this.array);
            })
            .catch(response => alert("Errores: " + response.status));
        },

        eliminarUsuarios(){
            axios.detele("https://jsonplaceholder.typicode.com/users/2")
        },

        sacarPost(){
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then( response => {
                this.arrayPosts = response.data;
                console.log(this.arrayPosts);
            })
            .catch( response => alert("Errores: " + response.status));
        },

        // Json-server ---------------------------------------------------------------------------
        
        sacarJugadores(){
            axios.get("http://localhost:3000/jugadores")
            .then( response => {
                this.arrayJugadores = response.data;
            })
            .catch( response => alert(" Errores: " + response.status))
    
        },

        anadirJugadores(){
            axios.post("http://localhost:3000/jugadores", this.jugador)
            .then( (response) => {
                console.log("Enviado: " + response)
              //  this.$router.replace("/prueba");
            })
        },


        actualizarJugador(id){
            axios.put("http://localhost:3000/jugadores/" + id, this.jugadorActualizado)
            .then( (response) => {
                console.log("Enviado: " + response)
              //  this.$router.replace("/prueba");
            })
        },

        eliminarJugador(id){
            console.log("EL ID A BORRAR ES: " + id);
            axios.delete("http://localhost:3000/jugadores/" + id)  
        },
        
        eliminarUnJugador(){
            axios.delete("http://localhost:3000/jugadores/14")           
        },

        actualizarJugadores(){
            axios.post("http://localhost:3000/jugadores", this.jugador)
            .then( (response) => {console.log("Enviado: " + response)})    
        },
    },
}
</script>

<style scoped>
.ul1{
    color: white;
    background-color: brown;
}
.ul2{
  
    background-color: rgb(37, 155, 202);
}
.tt{
    border: 1px solid black;
    width: 100%;
    
}
</style>