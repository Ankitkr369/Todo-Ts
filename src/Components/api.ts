import axios,{AxiosResponse} from "axios"
import { Todo } from "./constant";

const getTodos=async()=>{
    let response:AxiosResponse<Todo[]>= await axios.get('http://localhost:8080/todos');
    return response.data
}
export default getTodos;

export const addTodo=async(status:boolean,title:string)=>{
let response:AxiosResponse<Todo>=await axios.post('http://localhost:8080/todos',{status,title});
return response.data
}

export const updateTodo =async(updateTodo:Todo)=>{
    let response:AxiosResponse<Todo>=await axios.patch(`http://localhost:8080/todos/${updateTodo.id}`,{...updateTodo});
    return response.data
    }