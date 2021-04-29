<template>
    <div class="container ">
        <div class="row">
            <div class="col-lg-12">
                <h3>Componente New-hijo</h3>
                <p>Recibe del padre: {{reciboString}}</p>
                <button type="button" class="btn btn-danger" @click="envioPapa()">Envio a papa</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            variableAPapa: ' Toma papa'
        }
    },
    props: ['reciboString'],

    methods: {
        envioPapa(){
            console.log("Envio a papa: " + this.variableAPapa);
            this.$emit('varBebe', this.variableAPapa)
        }
    }
    
}
</script>

<style scoped>

</style>