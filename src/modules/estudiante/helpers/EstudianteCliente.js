import axios from "axios"

export const obtenerEstudianteFachada=async (cedula)=>{
    console.log('AXIOS')
    return await obtenerEstudianteAPIAxios(cedula);
}

export const ingresarEstudianteFachada= (bodyEstudiante)=>{
    ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada= (bodyEstudiante,id)=>{
    actualizarEstudiante(bodyEstudiante,id);
}

export const eliminarEstudianteFachada=async (id)=>{
    return await eliminarEstudiante(id);
}

const obtenerEstudianteAPI=async (cedula)=>{

    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MDYxMSwiZXhwIjoxNjkyNzUwODExfQ.JZyIJQyBFEoG9Aqn2SOS7_JyPtw1XC3xPcjHw_hQsxPsmulGpEUv6a_HjEVN5ik2MtcLflXP1PYe9jyPFnvFaA",
        "Mensaje": "valor1"
      }
    

    const data=await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r =>r.json());
    console.log(data);
    return data;
}
    //En el config vamos a enviar todos los datos de cabecera que tiene el api
const obtenerEstudianteAPIAxios=async (cedula)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTA3MCwiZXhwIjoxNjkyNzUxMjcwfQ.o_Tm-48DVk_WYoIAOclQ-fXeQMfSqU2ZOiTQr0ukmoeulQXVYbotB8Agl0z1nKTQfpPYuMAzJjY801Ik293CGQ",
        "Mensaje":"Valor1"
    }
    console.log('AXIOS 2')
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r=>r.data);
    console.log(data);
    return data;

}

const ingresarEstudiante= async (bodyEstudiante)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTA3MCwiZXhwIjoxNjkyNzUxMjcwfQ.o_Tm-48DVk_WYoIAOclQ-fXeQMfSqU2ZOiTQr0ukmoeulQXVYbotB8Agl0z1nKTQfpPYuMAzJjY801Ik293CGQ",
        "Mensaje":"Valor1"
    }
    axios.post(`http://localhost:8081/API/V1.0/Matricula/estudiantes`,bodyEstudiante,{headers:headers}).then(r=>r.data);
    
}
const headers= {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTA3MCwiZXhwIjoxNjkyNzUxMjcwfQ.o_Tm-48DVk_WYoIAOclQ-fXeQMfSqU2ZOiTQr0ukmoeulQXVYbotB8Agl0z1nKTQfpPYuMAzJjY801Ik293CGQ",
    "Mensaje":"Valor1"
}
const actualizarEstudiante=(bodyEstudiante,id)=>{
    axios.put(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`,bodyEstudiante,{headers:headers}).then(r=>r.data);
}

const obtenerEstudiantePorId = async (id) => {
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTA3MCwiZXhwIjoxNjkyNzUxMjcwfQ.o_Tm-48DVk_WYoIAOclQ-fXeQMfSqU2ZOiTQr0ukmoeulQXVYbotB8Agl0z1nKTQfpPYuMAzJjY801Ik293CGQ",
        "Mensaje":"Valor1"
    }
      const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/id/${id}`,{headers:headers}).then(r=>r.data);
      console.log(data)
      return data;

}

const eliminarEstudiante= async (id)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTA3MCwiZXhwIjoxNjkyNzUxMjcwfQ.o_Tm-48DVk_WYoIAOclQ-fXeQMfSqU2ZOiTQr0ukmoeulQXVYbotB8Agl0z1nKTQfpPYuMAzJjY801Ik293CGQ",
        "Mensaje":"Valor1"
    }
    const data = await obtenerEstudiantePorId(id);
    console.log(data);
    axios.delete(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`,{headers:headers}).then(r=>r.data);

    return data;
}
