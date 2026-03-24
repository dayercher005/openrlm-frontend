import type { FC } from 'react'
import { ConversationTypes } from '@/types/conversation.ts';
import { Link } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';

export const Conversation:FC<ConversationTypes> = ({
    id,
    title,
}) => {

    return(
        <div className="border-b-2 border-t-2 hover:border-transparent">
            <Link to={`/conversations/${id}`}>
                <div className="flex justify-between rounded-2xl
                hover:bg-gray-200 py-4.5 px-1 transition">
                    <h1 className="font-medium text-md">
                        {title}
                    </h1>
                    <MoreHorizontal 
                        className="mx-2.5 hover:bg-gray-500 rounded-md p-1 size-7.5 transition"
                    />
                </div>
            </Link>
        </div>
    )
}