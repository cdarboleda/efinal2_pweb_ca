<template>
    <div class="container">
        <generarToken></generarToken>

    </div>
</template>

<script>
import generarToken from '../components/generarToken.vue'
export default {
    components:{
        generarToken
    }
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>