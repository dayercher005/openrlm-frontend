import { Plus, ArrowUp } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

import axios from "axios"

export default function ChatInput(){

    const API = import.meta.env.VITE_API_URL

    const [input, setInput] = useState<string>("")

    const submitInput = async(event: React.FormEvent<HTMLFormElement>): Promise<void> => {

        event.preventDefault()

        const userData = {
            title: input,
            content: input,
            role: "user"
        }

        try{
            const response = await axios.post(API, userData)
            console.log(response.data)
            return response.data
        } catch (error){
            console.log(error)
        }
    }

    return(
        <form 
        action={API} 
        method="POST" 
        onSubmit={submitInput}
        className="max-w-4xl w-7/10 border-4 rounded-2xl p-4 mx-auto mt-auto">
            <Textarea 
            name="content"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="resize-none border-0 ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:ring-offset-0 shadow-none" 
            placeholder="How can I help you today?"
            required
            />
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