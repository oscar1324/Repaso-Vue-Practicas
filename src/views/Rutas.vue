<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1>Galeria de rutas:</h1>
                <Ruta />

                <hr>
                <h3>Peticiones:</h3>
                <button type="button" class="btn btn-success" @click="listar()">Listar</button> -
                <button type="button" class="btn btn-primary" @click="agregar()">agregar</button> -
                <button type="button" class="btn btn-success" @click="actualizar()">actualizar</button> -
                <button type="button" class="btn btn-danger" @click="borrar()">borrar</button>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Ruta from '../components/Rutita';
export default {
    data(){
        return{

        }
    },

    components: {
        Ruta
    },

    methods: {

        listar(){
         axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
         console.log(result.data);
         })

        },

        agregar(){

        },

        actualizar(){
              let post = {
                title: 'OSCAR',
                body: 'IZQUIERDO',
                userId: 1
            };
            axios.put("https://jsonplaceholder.typicode.com/posts/1", post).then((result) => {
                console.log(result);
            });

        },

        borrar(){
            axios.delete("https://jsonplaceholder.typicode.com/todos/1");
            console.log("Borrado");
        }

        }
}
</script>

<style scoped>

</style>