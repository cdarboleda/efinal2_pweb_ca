import axios from "axios"
const obtenerToken = async (body)=>{
    const data = axios.post(`http://localhost:8085/API/v1.0/Autorizacion/tokens/obtener`, body).then(r=>r.data)
    .catch(function(error){
console.log(error)

    })
    return data;
}

export const obtenerTokenFachada = async (body) =>{
    return await obtenerToken(body);
}