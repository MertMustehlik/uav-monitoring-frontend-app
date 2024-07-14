import {API_URL} from "./index";
import store from "../store";

export const getDrones = async () => {
    try {
        const response = await fetch(`${API_URL}/drones/`, {
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

export const createDrone = async (name) => {
    try {
        const formData = new FormData();
        formData.append('name', name);

        const response = await fetch(`${API_URL}/drones/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${store.state.auth.jwtToken}`
            },
            body: formData
        });

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

