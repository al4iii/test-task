import { API } from "../API/api";

const SET_TASKS = "task/SET_TASKS";
const SET_TOTAL_TASK_COUNT = "task/SET_TOTAL_TASK_COUNT";
const SET_CURRENT_PAGE = "task/SET_CURRENT_PAGE";

let initialState = {
  user: null,
  total_task_count: 0,
  tasks: [],
  currentPage: 1
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
    default:
      return state;
  }
};

export const setTasks = (tasks) => ({ type: SET_TASKS, tasks });
export const setTotalTaskCount = (total_task_count) => ({
  type: SET_TOTAL_TASK_COUNT,
  total_task_count,
});
export const setCurrentPages = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const getTasks = (user = "admin", page) => async (dispatch) => {
    let response = await API.getTask(user,page);  
    dispatch(setCurrentPages(page)); 
    dispatch(setTasks(response.data.message.tasks));
    dispatch(setTotalTaskCount(+response.data.message.total_task_count));
   

    // dispatch(toggleIsFetching(true));
    // dispatch(setUserName(user));
    // let response = await usersAPI.getUser(user);
    // if (response.status === 200) {
    //   dispatch(setIsFound(true));
    //   dispatch(setUserProfile(response.data));
    //   const currentPage = initialState.currentPage;
    //   const pageSize = initialState.pageSize;
    //   dispatch(getRepos(currentPage, pageSize, user));
    //   dispatch(getReposLength(user));
    //   dispatch(setCurrentPages(currentPage));
    // } else if (response.status === 404) {
    //   dispatch(setIsFound(false));
    //   dispatch(toggleIsFetching(false));
    // }
  };

export default taskReducer;
