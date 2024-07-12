import {API_URL} from "./index";

export const getTasks = async () => {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};
export const createTask = async (name, description, droneId) => {
    try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('drone_id', droneId);

        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            body: formData
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};
export const getTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};
export const getImages = async (task_id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${task_id}/images`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};
export const execute = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/execute`, {
            method: 'POST'
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};



