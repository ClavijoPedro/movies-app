import axios from "axios";


 const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmQzMzAyOGJjNTM3NzAyZjZjNGJkOTNjMjQ3ODIxYiIsInN1YiI6IjYzMzRhNGZhMjA5ZjE4MDA4NWRhNzdhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1sqPCtvJjoEYFviBR3FWofLsJ_vH9prJn5seuySz5Oo',
        'Content-Type': 'application/json;charset=utf-8',
    },
  })

  export default instance