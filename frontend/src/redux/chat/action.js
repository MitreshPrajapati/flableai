import * as types from './actionType';
import axios from 'axios';
import { URL } from '../../api';
// import { useSelector } from 'react-redux';

export const getAllChats = (payload) => (dispatch) => {
    dispatch({ type: types.CHAT_REQ_REQUEST });

    return axios.get(`${URL}/chats/getall`, {
        headers: {
            "Content-Type": "application/json",
            Authentication: `Bearer ${payload.token}`,
        }
    })
        .then((res) => {
            // console.log(res.data, "from action");
            return dispatch({ type: types.CHAT_REQ_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            dispatch({ type: types.CHAT_REQ_FAILURE })
        })

}

export const createNewChat = (payload) => (dispatch) => {
    dispatch({ type: types.CREATE_CHAT_REQ });

    return axios.post(`${URL}/chats/newchat`, payload, {
        headers: {
            "Content-Type": "application/json",
            Authentication: `Bearer ${payload.token}`,
        },
    }).then((response) => {
        return dispatch({ type: types.CREATE_CHAT_SUCESS, })
    }).catch((err) => {
        dispatch({ type: types.CREATE_CHAT_FAILURE, })
    });
}

export const updateAndGetChat = (payload) => (dispatch) => {
    dispatch({ type: types.CHAT_UPDATE_REQ });
    const { id, token, prompt } = payload;

    return axios.put(`${URL}/chats/chat/:${id}`, {prompt}, {
        headers: {
            "Content-Type": "application/json",
            Authentication: `Bearer ${token}`,
        },
    }).then((res) => {
        console.log(res, "update chat");
        return dispatch({type: types.CHAT_UPDATE_SUCCESS, payload: res.data})
    }).catch((err) => {
        dispatch({type: types.CHAT_UPDATE_FAILURE, payload: err})
    });
}

export const swithChat = (payload) => (dispatch) => {
    dispatch({ type: types.SWITCH_CHAT_REQ });
    console.log(payload, "from switch")
    const id = payload.id;
    return axios.get(`${URL}/chats/currentchat/:${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authentication: `Bearer ${payload.token}`,
        }
    }).then((res) => {
        // console.log(res);
        return dispatch({ type: types.SWITCH_CHAT_SUCCESS, payload: res.data })
    }).catch(err => {
        dispatch({ type: types.SWITCH_CHAT_FAILURE, payload: err })
    })
}