import axios from "axios"
const guardarEstudiante = (body, token)=>{

    const headers = { Authorization: `Bearer ${token}` };
    console.log("TOKEN EN HELEPER" +token)
    const config = {
      headers: headers,
    };
    axios.post(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`, 
    body, config).then(r=>r.data)

}

export const guardarEstudianteFachada = (body, token)=>{
    guardarEstudiante(body, token)
}