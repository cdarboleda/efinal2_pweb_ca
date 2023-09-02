<template>
    <div class="containerGenerarToken">
        <label for="">Semilla</label>
        <input type="text" class="form-control" v-model="semilla">
        <label for="">Tiempo de vigencia</label>
        <input type="number" class="form-control" v-model="tiempo">
        <label for="">Token</label>
        <input type="text" id ="token" class="form-control" v-model="token">
        <Button type="submit" class="btn btn-primary" @click = "guardar">Generar</Button>

    </div>
</template>

<script>
import {obtenerTokenFachada} from '@/modules/token/helpers/tokenCliente.js'
export default {
    data(){
        return{
            semilla : '',
            tiempo : 0,
            token : ''
        }
    },
    methods:{
        async guardar(){
            const tokenBody = {
                semilla : this.semilla,
                username : 'admin',
                password : '123',
                tiempo : this.tiempo
            }
            const tokenAPI = await obtenerTokenFachada(tokenBody);
            this.token = tokenAPI
        }
    }

}
</script>

<style scoped>
.containerGenerarToken{
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