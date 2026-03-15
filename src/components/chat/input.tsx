import { Plus, ArrowUp } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ChatInput(){

    return(
        <form action="" method="POST" className="max-w-2xl w-6/10 border-4 rounded-2xl p-4 mx-auto my-auto">
            <Textarea className="resize-none border-0 ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0 shadow-none" 
            placeholder="How can I help you today?" />
            <div className="flex justify-between p-2">
                <Button variant="outline">
                    <Plus />
                </Button>
                <Button type="submit">
                    <ArrowUp />
                </Button>
            </div>
        </form>
    )
}