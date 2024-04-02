import * as types from './actionType';
const initChat = {
    chatList: [],
    currentChat: {},
    isLoading: false,
    isError: false,
}

export const reducer = (state = initChat, action) => {
    const { type, payload } = action;
    // console.log(type, payload, "from reducer chat")
    switch (type) {
        case types.CHAT_REQ_REQUEST: return {
            ...state,
            isLoading: true,
            isError: false
        }

        case types.CHAT_REQ_SUCCESS: return {
            ...state,
            chatList: [...payload],
            isLoading: false,
            isError: false
        }

        case types.CHAT_REQ_FAILURE: return {
            ...state,
            isError: true,
            isLoading: false,
            currentChat: {},
            chatList:[]
        }

        case types.CHAT_UPDATE_REQ: return {
            ...state,
            isLoading: true,
            isError: false
        }

        case types.CHAT_UPDATE_SUCCESS: return {
            ...state,
            isLoading: false,
            isError: false,
            currentChat:{},
            
        }

        case types.CHAT_UPDATE_FAILURE: return {
            ...state, 
            isError: true,
            isLoading: false
        }

        case types.SWITCH_CHAT_REQ: return {
            ...state,
            isLoading: true,
            isError: false
        }

        case types.SWITCH_CHAT_SUCCESS: return {
            ...state,
            isLoading: false,
            isError: false,
            currentChat: payload,
        }

        default: return state;
    }
}