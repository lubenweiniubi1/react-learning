import axios from "axios"

const ajax = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
})

export const getPosts = () => {
  console.log(111)

  return ajax.get("/posts")
}
