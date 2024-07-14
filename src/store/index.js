import Vuex from 'vuex';
import { auth } from './authModule';

export default new Vuex.Store({
    modules: {
        auth
    }
});