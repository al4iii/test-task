import axios from "axios";

const instanse = axios.create({
  baseURL: "https://uxcandy.com/~shapoval/test-task-backend/v2",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const API = {
  getTask: (developer, page = 1) => {
    return instanse
      .get(`?developer=${developer}&page=${page}`)
      .then((response) => response);
  },
  sendTask: (bodyFormData, developer) => {
    debugger;
    return instanse
      .post(`/create?developer=${developer}`, bodyFormData)
      .then((response) => response);
  },
  login: (formData, username) => {
    debugger;
    return instanse
      .post(`/login?developer=${username}`, formData)
      .then((response) => response);
  },
  editTask: (formData, id, developer) => {
    debugger;
    return instanse
      .post(`edit/${id}?developer=${developer}`, formData)
      .then((response) => response);
  },
};
