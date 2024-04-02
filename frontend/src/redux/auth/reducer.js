import * as types from './actionType';
const initLogin = {
    isAuthenticated: JSON.parse(localStorage.getItem('token')) ? true : false,
    token: JSON.parse(localStorage.getItem('token')) || '',
    isAuthLoading: false,
    isAuthError: false,
    userDetails: JSON.parse(localStorage.getItem('user')) || {}
}
console.log(initLogin)
export const reducer = (state = initLogin, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.USER_LOGIN_REQUEST:
            return {
                ...state,
                isAuthLoading: true
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthLoading: false,
                isAuthenticated: true,
                token: payload.token,
                userDetails: payload
            }
        case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                isAuthLoading: false,
                isAuthError: true,
                isAuthenticated: false,
                token: '',
                userDetails: {}
            }
        default: return state;
    }
}