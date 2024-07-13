import {jwtDecode} from "jwt-decode";

function authUser() {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        return null;
    }

    try {
        return jwtDecode(token);
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
}

export default authUser;
