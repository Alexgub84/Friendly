import { chatService } from "../../services/chatService.js"

export function getChatsByUserId(userId) {
    console.log('chatId',userId);
    return async dispatch => {
        try {
            const chat = await chatService.getByUserId(userId);
            console.log(chat);
            dispatch({ type: 'LOAD_CHATS', chat });
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }  
    }
}
export function getChatById(chatId) {
    console.log('chatId',chatId);
    return async dispatch => {
        try {
            const chat = await chatService.getById(chatId);
            dispatch({ type: 'GET_CHAT', chat });
        } catch (err) {
            console.log('UserActions: err in loadUsers', err);
        }  
    }
}

export function saveChat(chat) {
    console.log('In actions',chat);
    return async dispatch => {
        if (chat._id) dispatch({ type: 'EDIT_CHAT', chat });
        else dispatch({ type: 'ADD_CHAT', chat });
    }
}

export function toggleChat(chatInfo=null){
    return dispatch => {
        dispatch({ type: 'TOGGLE_CHAT', chatInfo })
    }
}
