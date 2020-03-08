import axios from "axios";

export const RepositoryFactory = {
  getTodo: data => axios.post(`/user/todo`, data),
  createTodo: data => axios.post(`/todo`, data),
  deleteTodo: data => axios.post(`/todo/delete`, data),
  getUser: () => axios.get(`/users`),
  createUser: data => axios.post(`/user`, data),
  deleteUser: data => axios.post(`/user/delete`, data)
};
