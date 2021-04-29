<template>
    <!-- 
            <div class="container">
        <div class="row">
            <div class="col-lg-12 ">
                <h1>Estamos en componente padre:</h1>
                <form>
                    <label>Inserta número a enviar:</label>
                    <input type="text" class="form-control" v-model="numeroaEnviar">
                    <button type="button" class="btn btn-danger" @click="enviaraHijo()">Enviar</button>
                </form>
                    <hijo :valorRecibido="numeroaEnviar"  @escuchaHijo="VariabledelHijo"></hijo>
                    <hr>
                    <p>valor recibio del hijo: {{valorRecibidodehijo}}</p>
                    
                        Comunicación de padre a hijo:

                        1) Declaramos el componente hijo
                        2) Se declara en el hijo la variable en el array props: []
                        3) bindeamos la variable creada en el hijo que va a guardar la variable del padre
                        es como leer "meto numeroaEnviar en valor recibido (del hijo)"

                        Comunicación de hijo a padre:

                        1) En la segunda parte del componente hijo, declaro el nombre del emit del hijo y dentro, el método donde va a recalar
                        2) del lado del hijo, creamos método llamado EnviarPadre()  con el emit que esta formado por el evento que va a escuchar el padre + el dato
                        
                    
            </div>
        </div>
    </div>
    -->
    <br>

    <div class="container b2">
        <h2>Componente Papa 2:</h2>
        <form>
            <label>Quiero pasar a hijo la palabra: </label>
            <input type="text" class="form-control" v-model="palabraAEnviar">
            <button type="button" class="btn btn-danger" @click="enviarHijo()">Enviar hijo</button>
        </form>
        <p> Palabra escrita:  {{palabra}}</p>
        <p>Recibo del hijo: {{recibodeHijo}}</p>
        <new-hijo reciboString="palabraAEnviar" @varBebe="reciboGood"></new-hijo>
        <!--
            1) Creo el método que se va ejecutar el hacer click en el botón
            2) importo la clase hija y en ella, inserto la variable hija que va a recibir la variable enviada
                var hija = reciboString --- var papa = palabraAEnviar -- y se vindea
                recuerda de reciboString es el nombre del props a referirse en el hijo
         -->
    </div>


</template>

<script>
import Hijo from '../components/hijo.vue';
import NewHijo from '../components/nuevoHijo.vue'
export default {
    data(){
        return{
            numero: 0,
            numeroaEnviar: null,
            valorRecibidodehijo: 0,

            // Ahora variables de papa 2
            palabra: '',
            palabraAEnviar: '',
            recibodeHijo: ''
        }
    },

    components:  {
        Hijo, 
        NewHijo
    },

    methods: {
        enviaraHijo(){
            console.log("Se va a enviar al hijo el: " + this.numero);
            this.numero = this.numeroaEnviar;
        },

        VariabledelHijo(value){
            console.log("Valor recibido del hijo: " + value);
            this.valorRecibidodehijo = value;
        },

        // Ahora vamos con los métodos de papa 2
        enviarHijo(){
            this.palabra = this.palabraAEnviar
            console.log("Papa envia a hijo: " + this.palabra);
        },
        reciboGood(value){
                console.log("Recibo del hijo: " + value);
            this.recibodeHijo = value
        
        }
    }
    
}
</script>

<style scoped>
    .container{
        background-color: rgb(73, 233, 73);
        border: solid 2px black;

    }
    /*  Comunicación de padre a hijo
        1) Insertamos en el componente padre el componente hijo
        2) Le insertamos la variable que le queremos pasar, en este caso -> numero
        3) El componente hijo lo recibe mediente el array props: ['numero]
        4) Lo imprime en el template
    */
    .b2{
        background-color: cadetblue;
    }
</style>

