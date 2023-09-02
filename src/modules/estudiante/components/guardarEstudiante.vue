<template>
  <div class="containerGuardarEstudiante">

    <label for="">Token: </label>
    <input type="text" v-model = "token" id ="token" class="form-control">
    <label for="">Nombre: </label>

    <input type="text" v-model = "nombre" class="form-control">
    <label for="">Apellido: </label>

    <input type="text" v-model = "apellido" class="form-control">
    <label for="">Cedula: </label>

    <input type="text" v-model = "cedula" class="form-control">
    <button type="submit" class="btn btn-primary" @click="guardar">Guardar</button>
  </div>
</template>

<script>
import { guardarEstudianteFachada } from '../helpers/estudianteCliente';
export default {
    data(){
        return{
            nombre: '',
            cedula : '',
            apellido : '',
            token : ''
        }
    },
    methods:{
        guardar(){
 
            const body = {
                nombre : this.nombre,
                cedula : this.cedula,
                apellido : this.apellido
            }

            guardarEstudianteFachada(body, this.token)

        }
    }
}
</script>

<style scoped>

.containerGuardarEstudiante{
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 1rem;
    text-align: left;
    border: 1px solid black;
    border-radius: 5px;
}

.form-control{
    margin-top: 3px;
    border-radius: 5px;
}

label{
    margin-top: 10px;

}

button{
    margin-top: 20px;
    width: 30%;
    align-self: center;
}
#token{
    height: 100px;
}
</style>