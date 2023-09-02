<template>
  <div class="container">
    <guardarEstudiante></guardarEstudiante>
  </div>
</template>

<script>
import guardarEstudiante from '../components/guardarEstudiante.vue';
export default {
    components:{
        guardarEstudiante
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