import type { FC } from 'react'
import type { MessageTypes } from '@/types/message.ts'

export const Message: FC<MessageTypes> = ({
    id,
    content,
    role,
    conversation
}: MessageTypes) => {

    if (role == "ai"){
        return(
            <div>
                {content}
            </div>
        )
    }

    return (
        <div>
            {content}
        </div>
    )
}