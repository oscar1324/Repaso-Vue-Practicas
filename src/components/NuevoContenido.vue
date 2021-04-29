<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                    <h1>Nuevo componente insertado</h1>
                    <p>dato recibido del padre:  {{jugueteRecibido}}</p>
                    <button type="button" class="btn btn-success" @click="enviaraPadre()">enviar a papa</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            nombre: 'OSCAR'
        }
    },

    props:['jugueteRecibido'],
    methods: {
        enviaraPadre(){
            console.log("Eniva dato a papa: " + this.nombre);
            this.$emit("hijoDato", this.nombre)
        }

    }
}
</script>

<style scoped>

</style>