import {API_URL} from "./index";
import store from "../store";


export const login = async (email, password) => {
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${store.state.auth.jwtToken}`,
            },
            body: formData
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching:', error);
    }
};

export const logout = async () => {
    localStorage.removeItem('jwtToken');
    return {
        "success": true
    }
};

export const authCheck = async () => {
    try {
        const response = await fetch(`${API_URL}/auth/check`, {
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

