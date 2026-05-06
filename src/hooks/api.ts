import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { getConversationFunction, getMessagesFunction, createMessagesFunction } from '../libs/index.ts';
import { MessageTypes } from '../types/types.ts';

// Custom hook to get list of conversations
export const useConversations = () => {
    return useQuery({
        queryKey: ['conversationList'],
        queryFn: async() => getConversationFunction()
    })
}

// Custom hook to get list of messages in a single conversation
export const useMessages = (params:string) => {
    return useQuery({
        queryKey: ['messages'],
        queryFn: async() => getMessagesFunction(params)
    })
}


// Custom hook to create new messages in each conversation
export const useCreateMessages = () => {
    return useMutation({
        mutationFn: async({ conversationID, newMessage }: { conversationID: string; newMessage: MessageTypes }) =>
            createMessagesFunction(conversationID, newMessage),
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}

// Custom hook to retrieve value of input
export const useInput = (initialValue: string) => {
    const [value, setValue] = useState<string>(initialValue);

    const onChange = (event: React.FormEvent<HTMLFormElement>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    return {
        value, 
        onChange
    }
}

