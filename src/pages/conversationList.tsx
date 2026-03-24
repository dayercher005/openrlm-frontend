import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useConversations } from '@/hooks/api.ts';
import { ConversationTypes } from '@/types/conversation.ts';
import { Conversation } from '@/components/chat/conversation.ts';

export const ConversationList: FC = () => {

    const { isPending, isError, data, error } = useConversations()
    console.log(data)

    if (isPending){
        return(
            <div>
                <div className="flex justify-between max-w-2xl mx-auto">
                    <h1 className="text-xl font-semibold">Conversations</h1>
                    <Link to="/">
                        <Button>
                            <Plus />
                        </Button>
                    </Link>
                </div>

                <p>Loading...</p>
            </div>
        )
    }

    if (isError){
        return <p>Error: {error.message} </p>
    }

    return(
        <div>
            <div className="flex justify-between max-w-3xl mx-auto mb-6">
                <h1 className="text-xl font-semibold">Conversations</h1>
                <Link to="/">
                    <Button>
                        <Plus />
                    </Button>
                </Link>
            </div>
            
            <div className="max-w-3xl mx-auto py-2">
                {data?.map((conversation: ConversationTypes) => (
                    <Conversation
                        id={conversation.id}
                        title={conversation.title}
                    />
                ))}
            </div>
            
        </div>
    )
}