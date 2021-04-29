<template>
    <div class="container">
        <h3>Estamos en componente hijo llamado Rutita:  {{$route.params.id}}</h3>
    </div>
</template>

<script>
export default {
    name: 'rutita'
}
</script>

<style scoped>
.container{
    background-color: coral;
}
</style>