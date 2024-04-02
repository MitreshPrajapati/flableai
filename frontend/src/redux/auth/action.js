import { URL } from '../../api';
import * as types from './actionType';
import axios from 'axios';



export const login = (payload) => (dispatch) => {
    dispatch({ type: types.USER_LOGIN_REQUEST });

    return axios.post(`${URL}/auth/login`, payload)
        .then((res) => {
            console.log(res, "from dispatch");
            let token = JSON.stringify(res?.data?.token);
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(res?.data))
            return dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: types.USER_LOGIN_FAILURE, payload: err })
        })
}