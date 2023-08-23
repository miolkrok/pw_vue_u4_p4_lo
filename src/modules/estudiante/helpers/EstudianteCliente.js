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
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTQzMiwiZXhwIjoxNjkyNzUzNDMyfQ.GxeHcoNj_mclvlgLcKzummIG11I_TxmoGqIzL_UzkaNE4xVvdRKR3tVdX-cmip0Aekgb_chEHowApiYDZriz8g",
        "Mensaje": "valor1"
      }
    

    const data=await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r =>r.json());
    console.log(data);
    return data;
}
    //En el config vamos a enviar todos los datos de cabecera que tiene el api
const obtenerEstudianteAPIAxios=async (cedula)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTQzMiwiZXhwIjoxNjkyNzUzNDMyfQ.GxeHcoNj_mclvlgLcKzummIG11I_TxmoGqIzL_UzkaNE4xVvdRKR3tVdX-cmip0Aekgb_chEHowApiYDZriz8g",
        "Mensaje":"Valor1"
    }
    console.log('AXIOS 2')
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`,{headers:headers}).then(r=>r.data);
    console.log(data);
    return data;

}

const ingresarEstudiante= async (bodyEstudiante)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTQzMiwiZXhwIjoxNjkyNzUzNDMyfQ.GxeHcoNj_mclvlgLcKzummIG11I_TxmoGqIzL_UzkaNE4xVvdRKR3tVdX-cmip0Aekgb_chEHowApiYDZriz8g",
        "Mensaje":"Valor1"
    }
    axios.post(`http://localhost:8081/API/V1.0/Matricula/estudiantes`,bodyEstudiante,{headers:headers}).then(r=>r.data);
    
}
const headers= {
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTQzMiwiZXhwIjoxNjkyNzUzNDMyfQ.GxeHcoNj_mclvlgLcKzummIG11I_TxmoGqIzL_UzkaNE4xVvdRKR3tVdX-cmip0Aekgb_chEHowApiYDZriz8g",
    "Mensaje":"Valor1"
}
const actualizarEstudiante=(bodyEstudiante,id)=>{
    axios.put(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`,bodyEstudiante,{headers:headers}).then(r=>r.data);
}

const obtenerEstudiantePorId = async (id) => {
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTQzMiwiZXhwIjoxNjkyNzUzNDMyfQ.GxeHcoNj_mclvlgLcKzummIG11I_TxmoGqIzL_UzkaNE4xVvdRKR3tVdX-cmip0Aekgb_chEHowApiYDZriz8g",
        "Mensaje":"Valor1"
    }
      const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/id/${id}`,{headers:headers}).then(r=>r.data);
      console.log(data)
      return data;

}

const eliminarEstudiante= async (id)=>{
    const headers= {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBcmllbCIsImlhdCI6MTY5Mjc1MTQzMiwiZXhwIjoxNjkyNzUzNDMyfQ.GxeHcoNj_mclvlgLcKzummIG11I_TxmoGqIzL_UzkaNE4xVvdRKR3tVdX-cmip0Aekgb_chEHowApiYDZriz8g",
        "Mensaje":"Valor1"
    }
    const data = await obtenerEstudiantePorId(id);
    console.log(data);
    axios.delete(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`,{headers:headers}).then(r=>r.data);

    return data;
}
