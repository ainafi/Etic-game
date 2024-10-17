
import axios from 'axios'

const url = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzdkOGVhOWY5OGEzYjY1MDllMDliOTUxZjhiYzA2NyIsIm5iZiI6MTcyOTE2MDcxNi42OTIxNTUsInN1YiI6IjY2ZjU0YzdhNGY5NDljN2E1YzQ3ZTM5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BsD2iVO4XPhwVTnJmdLF1yCCoF6aRLkTtLn0mjXYFLA'
  }
};
export const fetchData = async (section:string,category?:string,time?:string) => {
  const { data } = await axios.get(`${url}/${section}/${category}/${time}?language=en-US&page=1`, options)
  return data
}

