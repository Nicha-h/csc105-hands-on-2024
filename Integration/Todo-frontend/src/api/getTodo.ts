import axios from 'axios';
import { Axios } from '../utils/axiosInstance';
 

const getTodoAPI = async () => {
    try {
        const response = await Axios.get('/todo');
        return response.data;

    } catch (e) {
        console.log(e);
        return{
            success: false,
            data:null,
            msg: 'AXIOS ERROR'
        }
    }
};

const addTodoAPI = async (newTodoTitle: string) => {
    try {
      const response = await Axios.post('/todo', { title: newTodoTitle });
      return response.data;
    } catch (e) {
      console.log("Error:", e);
      return {
        success: false,
        data: null,
        msg: 'AXIOS ERROR: ' + (e.response ? e.response.data.msg : e.message),
      };
    }
  };
 
const updateTodoAPI = async (id, title) => {
    try {
      const response = await Axios.patch('/todo', {
        id,
        title,
      });
      return response.data;
    } catch (error) {
      console.error("Update failed:", error);
      return { success: false, error };
    }
};
  
  

const completeTodoAPI = async (todoId) => {
    try {
      const response = await Axios.patch('/todo', {
        id: todoId,
      });
      return response.data;
    } catch (error) {
      console.error("Update failed:", error);
      return { success: false, error };
    }
  };
  
  

  const deleteTodoAPI = async (id) => {
    try {
      const response = await Axios.delete(`/todo/${id}`);
      return response.data;
    } catch (error) {
      console.error("Delete failed:", error);
      return { success: false };
    }
  };
  
  
export { getTodoAPI ,addTodoAPI, deleteTodoAPI,updateTodoAPI, completeTodoAPI};