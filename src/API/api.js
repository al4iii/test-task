import axios from "axios";

const instanse = axios.create({
  baseURL: "https://uxcandy.com/~shapoval/test-task-backend/v2",
  
});

export const API = {
  getUser: (user) => {
    return instanse
      .get(`users/${user}`)
      .then((response) => response)
      .catch((error) => {
        return error.response;
      });
  },
  getRepos: (currentPage, pageSize, user) => {
    return instanse
      .get(`users/${user}/repos?page=${currentPage}&per_page=${pageSize}`)
      .then((response) => response.data);
  },
  getTask: (user = "al4i", page=1) => {
    return instanse
      .get(`?developer=${user}&page=${page}`)
      .then((response) => response);
      
  },
};
