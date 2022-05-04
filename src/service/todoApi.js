import axiosClient from "./axiosClient";

const todoApi = {
  getAllTodo() {
    const url = "todolist";
    return axiosClient.get(url);
  },

  deleteTodo(id) {
    const url = `/todolist/${id}`;
    return axiosClient.delete(url);
  },

  addTodo(newTodo) {
    const url = "/todolist";
    return axiosClient.post(url, newTodo);
  },

  editTodo(id, editData) {
    const url = `/todolist/${id}`;
    return axiosClient.patch(url, editData);
  },
};

export default todoApi;
