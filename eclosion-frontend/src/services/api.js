import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:4001"
})

api.interceptors.request.use((config)=> {
    const token = localStorage.getItem("token") // obtener el token del localStorage
    // si el token existe, agregarlo a los headers de la peticion
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("token");
//       window.location.href = "/"; // Redirigir al home
//     }
//     return Promise.reject(error);
//   }
// );

export default api;