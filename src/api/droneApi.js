import {API_URL} from "./index";

export const getDrones = async () => {
    try {
        const response = await fetch(`${API_URL}/drones`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};

export const createDrone = async (name) => {
    try {
        const formData = new FormData();
        formData.append('name', name);

        const response = await fetch(`${API_URL}/drones`, {
            method: 'POST',
            body: formData
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};

