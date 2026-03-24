import type { FC } from 'react';
import ChatInput from '@/components/chat/input';
import { Message } from '@/components/chat/message.tsx';
import { useMessages } from '@/hooks/api.ts';
import { MessageTypes } from '@/types/message.ts';

export const Conversation: FC = () => {

    const { isPending, isError, error, data } = useMessages();

    if (isPending){
        return(
            <div>
                <p>Loading...</p>
                <ChatInput />
            </div>
            
        )
    }

    if (isError){
        return <p>Error: {error.message} </p>
    }

    return(
        <div>
            <div>
                {data?.map((message: MessageTypes) => (
                    <Message
                        id={message.id}
                        content={message.content}
                        role={message.role}
                        conversation={message.conversation}
                    />
                ))}
            </div>
            <ChatInput />
        </div>
    )
}