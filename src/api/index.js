import axios from "axios";

let URI = "http://localhost:3000/show";

export const addNewTodo = async (payload) => {
  let addRes = await axios.post(`${URI}/add-todo`, payload);
  return addRes;
};

export const deleteTodo = async (todo_id) => {
  let delRes = await axios.get(`${URI}/delete`, { params: todo_id });
  return delRes;
};

export const updateTodo = async (payload) => {
  let updateRes = await axios.post(`${URL}/update`, payload);
  console.log({ updateRes });
};
