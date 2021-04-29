<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2>Estamos en componente hijo:</h2>
                <p>Comprobación de que recibe número: {{valorRecibido}}</p>
                <hr>
                <p>enviar al padre el número: {{number}} - {{name}}</p>
                <button type="button" class="btn btn-success" @click="EnviarPadre()">Enviar al padre</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name:'Hijo',
   number: 10,
   props: ['valorRecibido'],

   methods:{
       EnviarPadre(){
           // escuchaHijo es el evento a ejecutar en el padre y segudno el dato a enviar
           this.$emit('escuchaHijo', this.valorRecibido)
           console.log("Le pasas al padre: " + this.valorRecibido);
       }
   }
    
}
</script>

<style scoped>
.container{
    background-color: rgb(65, 61, 90);
    border: 1px black solid;
}
</style>