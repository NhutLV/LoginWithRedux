import {ACTION_LOGOUT, ACTION_LOGIN} from '../constant/ActionType'

const defaultState = {
    isLogin: false,
    username: '',
    password: ''
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ACTION_LOGIN:
            return {
                ...state,
                username: action.username,
                password: action.password,
                isLogin: true
            };
        case ACTION_LOGOUT:
            return {
                ...state,
                username: '',
                password: '',
                isLogin: false
            };
        default:
            return state;
    }
}