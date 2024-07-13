import {API_URL, JWT_TOKEN} from "./index";

export const login = async (email, password) => {
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`,
            },
            body: formData
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching drones:', error);
    }
};

export const authCheck = async () => {
    try {
        const response = await fetch(`${API_URL}/auth/check`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`,
            },
        });

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};

