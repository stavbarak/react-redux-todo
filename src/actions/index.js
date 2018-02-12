import axios from 'axios';

export const FETCH_TASKS = 'fetch_tasks';
const API_URL = 'https://5a630c3c9e3dc40012d03263.mockapi.io/Stav';
//const API_KEY = '?key=sefitemp';

export function fetchTasks(){

    const request = axios.get(`${API_URL}/tasks`); /// /${id} ///${API_KEY}

    return {
        type: FETCH_TASKS,
        payload: request
    }
}