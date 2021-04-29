<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-10">
                <h1 :title="mensaje">Bienvenido de nuevo a Vue:</h1>

                <input v-model="mensaje2" type="text" class="form-control ">
                <p>{{mensaje2}}</p>

                <hr>
                <h2>Prueba de v-if:</h2><br>
                <p v-if="tipo === 1">Muestro primera condición</p>
                <p v-else-if="tipo === 2">Muestro segunda condición</p>
                <p v-else-if="tipo === 3">Muestro tercera condición</p>
                <p v-else>Muestro cuarta condición</p>
                <p>numero: {{tipo}}</p>

                <hr>
                <h3>V-for:</h3>
                <ul v-for="(cadaPersona, index) in personas" :key="index">
                    <li>{{cadaPersona.nombre}} {{cadaPersona.apellido}} - {{cadaPersona.edad}} / genero: {{cadaPersona.genero}} - 
                        <button type="button" class="btn btn-success" @click="pasarNombre(cadaPersona.nombre)">Pasar nombre</button></li>
                </ul>

                <hr>
                <h4>Mostrar eventos:</h4>
                <button type="button" class="btn btn-primary" @click="mostrarAlerta()">Mostar alerta</button>

                <hr>
                <h4>Ejercicio mini:</h4>
                <p v-for="(cadaProposito, index) in propositos" :key="index" >
                    <input type="checkbox"  v-model="cadaProposito.hecho">
                    {{cadaProposito.texto}}
                </p>

                <hr>
                <h4>Inserción de nuevo Componente</h4>
                Valor recibido del hijo: {{newValor}}
                <nuevo-contenido :jugueteRecibido="juguete" @hijoDato="metodoenPapa"></nuevo-contenido>
            </div>
        </div>
    </div>
</template>

<script>
import NuevoContenido from '../components/NuevoContenido.vue';
import NuevoComponente from '../components/NuevoContenido.vue';
export default {
  components: { NuevoContenido },
    data(){
        return{
            newValor: '',
            juguete: 'pelota',
            nombreGO: '',
            mensaje: 'Voy a vovler a dominar enseguida VUE',
            mensaje2: 'Dato bidireccional',
            tipo: 2,
            personas: [
                {nombre: 'Óscar', apellido: 'izquierdo', edad: '21', genero: 'H'},
                {nombre: 'Alba', apellido: 'Muriel', edad: '19', genero: 'G'},
                {nombre: 'Enrique', apellido: 'Muriel', edad: '20', genero: 'H'},
                {nombre: 'Peli', apellido: 'Garcia', edad: '21', genero: 'H'}
            ],
            propositos: [{
                texto: "Hacer deporte",
                hecho: true
                }, {
                texto: "Comer mas sano",
                hecho: false
                }, {
                texto: "Viajar mas",
                hecho: true
            }],
            components:{
                NuevoComponente
            },

        }
    },

    methods: {
        mostrarAlerta(){
            alert("Acabas de sacar un alert")
            if (this.tipo === 2) {
                alert("Estoy súper enamorado de Alba Muriel")
            } else {
                console.log("Caca de vaca");
            }
        },

        metodoenPapa(valor){
            console.log("valor recibido: " + valor);
            this.newValor = valor
        }

        

    }
}
</script>