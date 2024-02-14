import Prompt from "@/models/prompt"
import { connectToDB } from "@/utils/database"
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function"

export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')
        console.log('Success get all post !')
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.log('Can not get all Post !')
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 