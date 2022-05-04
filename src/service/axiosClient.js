import axios from "axios";

const baseURL = "https://hd-todo-app.herokuapp.com";
const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
