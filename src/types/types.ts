export interface ConversationTypes {
    id: string,
    title: string,
}

export interface ChatInputTypes {
    API: string,
}

export interface MessageTypes{
    id: string,
    content: string,
    role: string,
    conversation: string | undefined
}