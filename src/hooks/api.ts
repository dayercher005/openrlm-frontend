import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ConversationTypes } from '@/types/conversation.ts'
import { MessageTypes } from '@/types/message.ts'

const ConversationsAPI = import.meta.env.VITE_API_CONVERSATIONS_URL
const MessagesAPI = import.meta.env.VITE_API_MESSAGES_URL
const API = import.meta.env.VITE_CONVERSATIONS_URL

const getConversationFunction = async ():Promise<ConversationTypes[]> => {
    const response = await axios.get(ConversationsAPI)
    return response.data
}

export const useConversations = () => {
    return useQuery({
        queryKey: ['conversationList'],
        queryFn: async() => getConversationFunction()
    })
}

const getMessagesFunction = async ():Promise<MessageTypes[]> => {
    const response = await axios.get(MessagesAPI)
    return response.data
}

export const useMessages = () => {
    return useQuery({
        queryKey: [],
        queryFn: async() => getMessagesFunction()
    })
}



