import { API } from "../API/api";

const SET_TASKS = "task/SET_TASKS";
const SET_TOTAL_TASK_COUNT = "task/SET_TOTAL_TASK_COUNT";
const SET_CURRENT_PAGE = "task/SET_CURRENT_PAGE";
const SET_TOKEN = "task/SET_SET_TOKEN";
const SET_DEVOLOPER = "task/SET_DEVOLOPER";
const SET_EDIT = "task/SET_EDIT";

let initialState = {
  developer: "al4i",
  total_task_count: 0,
  tasks: [],
  currentPage: 1,
  token: null,
  id: null,
  isEdit: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks };
    case SET_TOTAL_TASK_COUNT:
      return { ...state, total_task_count: action.total_task_count };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_DEVOLOPER:
      return {
        ...state,
        developer: action.developer,
      };
    case SET_EDIT:
      return {
        ...state,
        isEdit: action.isEdit,
      };
    default:
      return state;
  }
};

export const setTasks = (tasks) => ({ type: SET_TASKS, tasks });
export const setToken = (token) => ({ type: SET_TOKEN, token });
export const setDevoloper = (developer) => ({ type: SET_DEVOLOPER, developer });
export const setTotalTaskCount = (total_task_count) => ({
  type: SET_TOTAL_TASK_COUNT, total_task_count});
export const setCurrentPages = (currentPage) => ({
  type: SET_CURRENT_PAGE, currentPage });
export const setEdit = (isEdit) => ({ type: SET_EDIT, isEdit });

export const getTasks = (developer, page = 1) => async (dispatch) => {
    let response = await API.getTask(developer, page);
    dispatch(setCurrentPages(page));
    dispatch(setTasks(response.data.message.tasks));
    dispatch(setTotalTaskCount(+response.data.message.total_task_count));
};
export const sendTask = (email, name, text, developer) => async (dispatch) => {
  const bodyFormData = new FormData();
  bodyFormData.set("username", name);
  bodyFormData.set("email", email);
  bodyFormData.set("text", text);
  await API.sendTask(bodyFormData, developer);
  dispatch(getTasks(developer, 1));
};
export const login = (username, password) => async (dispatch) => {
  const formData = new FormData();
  formData.set("username", username);
  formData.set("password", password);
  let response = await API.login(formData, username);
  dispatch(setToken(response.data.message.token));
  if (!!response.data.message.token) {
    dispatch(setDevoloper(username));
    dispatch(getTasks(username, 1));
  }
};
export const editTask = (text, id, developer, token) => async (dispatch) => {
  const formData = new FormData();
  formData.set("text", text);
  formData.set("token", token);
  let response = await API.editTask(formData, id, developer);
  if ((response.data.status = "ok")) {
    dispatch(setEdit(true));
    dispatch(getTasks(developer, 1));
    dispatch(setEdit(false));
  }
};

export default taskReducer;
