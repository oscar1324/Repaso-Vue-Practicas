<template>
   <div class="container">
       <div class="row">
           <div class="col-lg-12">
                <h2>Componente peticiones hijo:</h2>
                <p>1) Vamos a recorrer el array, una petición solicitada para que nos de los jugadores del mismo pais.</p>
                <p>Nombre de pais recibido: {{nombrePais}}</p>
                <button type="button" class="btn btn-danger" @click="plasmardato(nombrePais)">Sacar pais</button>

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
                        </tr>

                        <tr  class="tt"  v-for="(cadaPis, index) in arrayPais" :key="index">
                            <td>{{cadaPis.id}}</td>
                            <td>{{cadaPis.nombre}}</td>
                            <td>{{cadaPis.apellido}}</td>
                            <td>{{cadaPis.edad}}</td>
                            <td>{{cadaPis.pais}}</td>
                            <td>{{cadaPis.altura}}</td>

                            <td>x</td>
                            <td>x</td>
                        </tr>
                    </table>
                </div>
           </div>
       </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            arrayPais: []
        }
    },
    methods:{

        plasmardato(nombrePais){
            console.log("por el hijo recibe: " + nombrePais);
            axios.get('http://localhost:3000/jugadores?pais=' + nombrePais)
            .then(response => this.arrayPais = response.data)
            .catch(response => alert("Errores: " + response.status));
        },
    },
    props: ["nombrePais"],
    watch: {
            nombrePais(nuevo){
            this.arrayPais = this.plasmardato(nuevo);
        }
    }  
}
</script>

<style scoped>
.tt{
    border: 1px solid black;
    width: 100%;
    
}
</style>