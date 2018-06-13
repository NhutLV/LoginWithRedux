import {ACTION_LOGIN, ACTION_LOGOUT} from "../constant/ActionType"

export const login = (username, password) => {
    return {
        type: ACTION_LOGIN,
        username: '',
        password: ''
    }
};

export const logout = () => {
    return{
        type: ACTION_LOGOUT
    }
};