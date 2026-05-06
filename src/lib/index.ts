import axios from 'axios';
import { ConversationTypes } from '@/types/types';
import { MessageTypes } from '@/types/types.ts';
import { ConversationsAPI, MessagesAPI } from '../lib/config';

// Query Function to retrieve list of conversations
export const getConversationFunction = async ():Promise<ConversationTypes[]> => {
    const response = await axios.get(ConversationsAPI)
    return response.data
}


// Query Function to retrieve all messages from each conversation
export const getMessagesFunction = async (params:string):Promise<MessageTypes[]> => {
    const response = await axios.get(`${MessagesAPI + params}`)
    return response.data
}


export const createMessagesFunction = async (newMessage:MessageTypes, dynamicParameters:string) => {
    const response = await axios.post(MessagesAPI + dynamicParameters, newMessage)
    return response
}

