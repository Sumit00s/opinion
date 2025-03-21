"use client"

import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Updateupvote, Updatedownvote } from "../_lib/actions";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";

export default function OpinionCard({opinion}){

    const [upvotes, setUpvotes] = useState(opinion.upvote);
    const [downvotes, setdownvotes] = useState(opinion.downvote);

    async function upvoteCreated(id) {
        const updatedData = await Updateupvote(id);
        if (updatedData && updatedData.length > 0) {
            setUpvotes(updatedData[0].upvote); // Extract first element
            toast.success(`👍Upvoted ${opinion.name}`);
        }
        else{
            toast.error("Failed to upvote. Try again!");
        }
    }
    
    async function downvoteCreated(id) {
        const updatedData = await Updatedownvote(id);
        if (updatedData && updatedData.length > 0) {
            setdownvotes(updatedData[0].downvote); // Extract first element
            toast.success(`👎DownVoted ${opinion.name}`);
        }
        else{
            toast.error("Failed to downvote. Try again!");
        }
    }
    

    return(
            <Card className='w-[350px] my-5 mx-auto border-[0.5px] bg-black text-white'>
                <CardHeader>
                    <CardTitle className='flex justify-between w-full mb-2'>
                        <p><span className=" text-slate-500 font-bold">For:</span> <span className=" text-white rounded-full px-2 py-0.5">{opinion.name}</span></p>
                        <p className=" text-white">{opinion.branch}</p>
                    </CardTitle>
                    <hr />
                </CardHeader>
                <CardContent>
                    <p className="rounded-sm">{opinion.message}</p>

                    {
                        opinion.image_url && (
                            <img className="my-2" src={opinion.image_url}/>
                        )
                    }
                </CardContent>
                <CardFooter className="flex gap-3 w-full">
                    <div className="flex w-full gap-3">
                        <button 
                            onClick={() => upvoteCreated(opinion.id)} 
                            className="hover:bg-green-700 cursor-pointer flex-[3] p-2 bg-black border-1 rounded-sm flex items-center justify-center gap-2 w-full"
                        >
                            <ThumbsUp className=" text-green-500" size={20} fill="currentColor" stroke="none"/> {upvotes}
                        </button>
                        <button 
                            onClick={() => downvoteCreated(opinion.id)} 
                            className="hover:bg-red-700 cursor-pointer flex-[3] p-2 bg-black border-1 rounded-sm flex items-center justify-center gap-2 w-full"
                        >
                            <ThumbsDown className=" text-red-500" size={20} fill="currentColor" stroke="none"/> {downvotes}
                        </button>
                        <Link 
                            href={`/post/${opinion.id}`} 
                            className="hover:bg-blue-700 cursor-pointer flex-[4] p-2 bg-blue-800 rounded-sm flex items-center justify-center gap-0.5 w-full"
                        >
                            <MessageCircle className="text-white" size={20} fill="currentColor" stroke="none" /> Comments
                        </Link>
                    </div>
                </CardFooter>          
            </Card> 
    )
}