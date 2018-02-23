import axios from 'axios';

export const FETCH_TASKS = 'fetch_tasks';
export const CREATE_TASK = 'create_tasks';
export const FETCH_TASK = 'fetch_task';
export const DELETE_TASK = 'delete_task';


const API_URL = 'https://5a8ffe64d515b5001200535c.mockapi.io/Stav/tasks';

export function fetchTasks(){

    const request = axios.get(`${API_URL}`);

    return {
        type: FETCH_TASKS,
        payload: request
    }
}


export function createTask(values, callback){

    const request = axios.post(`${API_URL}`, values)
        .then(() => callback());

    return {
        type: CREATE_TASK,
        payload: request
    }
}

export function fetchTask(id){

    const request = axios.get(`${API_URL}/${id}`);

    return {
        type: FETCH_TASK,
        payload: request
    }
}

export function deleteTask(id, callback){

    const request = axios.delete(`${API_URL}/${id}`)
        .then(() => callback());

    return {
        type: DELETE_TASK,
        payload: id
    }
}