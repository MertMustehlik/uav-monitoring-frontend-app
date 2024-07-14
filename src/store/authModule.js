import {login} from "@/api/authApi.js";

const jwtToken = localStorage.getItem('jwtToken');

export const auth = {
    namespaced: true,
    state: {
        "check": !!jwtToken,
        "jwtToken": jwtToken,
    },
    actions: {
        async login({commit}, user) {
            try {
                let res = await login(user.email, user.password);
                if (res?.success) {
                    localStorage.setItem('jwtToken', res?.token);
                    commit("loginSuccess");
                } else {
                    commit("loginFailure");
                }

                return res;
            } catch (error) {
                console.error("Login error:", error);
                commit("loginFailure");
            }
        },
        logout({ commit }) {
            localStorage.removeItem('jwtToken');
            commit("logout");

            return {
                "success": true,
                "message": "Exit made"
            }
        }
    },
    mutations: {
        loginSuccess(state) {
            state.check = true;
            state.jwtToken = localStorage.getItem('jwtToken');
        },
        loginFailure(state) {
            state.check = false;
            state.jwtToken = '';

        },
        logout(state) {
            state.check = false;
            state.jwtToken = '';
        }
    }
};