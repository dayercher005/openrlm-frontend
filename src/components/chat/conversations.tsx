import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export const Conversations: FC = () => {
    return(
        <div>
            <div className="flex justify-between max-w-2xl mx-auto">
                <h1 className="text-xl font-semibold">Conversations</h1>
                <form>
                    <Button type="submit">
                        <Plus />
                    </Button>
                </form>
                
            </div>
            
        </div>
    )
}