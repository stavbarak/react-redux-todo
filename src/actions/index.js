import axios from 'axios';

export const FETCH_TASKS = 'fetch_tasks';
export const CREATE_TASK = 'create_tasks';

const API_URL = 'https://5a8ffe64d515b5001200535c.mockapi.io/Stav';

export function fetchTasks(){

    const request = axios.get(`${API_URL}/tasks`);

    return {
        type: FETCH_TASKS,
        payload: request
    }
}


export function createTask(values, callback){

    const request = axios.post(`${API_URL}/tasks`, values)
        .then(() => callback());

    return {
        type: CREATE_TASK,
        payload: request
    }
}