import axios from 'axios';
import { ConversationTypes } from '@/types/types';
import { MessageTypes } from '@/types/types.ts';
import { ConversationsAPI, MessagesAPI } from './config';

// Query Function to retrieve list of conversations
export const getConversationFunction = async ():Promise<ConversationTypes[]> => {
    const response = await axios.get(ConversationsAPI)
    return response.data
}


// Query Function to retrieve all messages from each conversation
export const getMessagesFunction = async (conversationID:string):Promise<MessageTypes[]> => {
    const response = await axios.get(`${MessagesAPI}/${conversationID}`)
    return response.data
}


export const createMessagesFunction = async (conversationID:string, newMessage:MessageTypes,) => {
    return axios.post(`${MessagesAPI}/${conversationID}`, newMessage)
}

