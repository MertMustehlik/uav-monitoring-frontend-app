import {API_URL} from "./index";
import store from "../store";

export const getTasks = async () => {
    try {
        const response = await fetch(`${API_URL}/tasks/`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${store.state.auth.jwtToken}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};
export const createTask = async (name, description, droneId) => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('drone_id', droneId);

        const response = await fetch(`${API_URL}/tasks/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${store.state.auth.jwtToken}`,
            },
            body: formData
        });

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};
export const getTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${store.state.auth.jwtToken}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};
export const getImages = async (task_id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${task_id}/images`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${store.state.auth.jwtToken}`,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching:', error);
    }
};
export const execute = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/execute`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${store.state.auth.jwtToken}`,
            },
        });

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};



