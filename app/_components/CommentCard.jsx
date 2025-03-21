'use client';

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { SendHorizonal } from "lucide-react";
import { useState } from "react";
import { createComment } from "../_lib/actions";

export default function CommentCard({post}){

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="w-[350px] mx-auto">
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <AlertDialogTrigger asChild>
                <button className=" text-slate-400 cursor-pointer bg-black border rounded-full py-4 w-full flex items-center justify-start px-2 gap-2 hover:bg-slate-900"><SendHorizonal/> <span>Comment For {post.name}</span></button>
                </AlertDialogTrigger>

                {/* Modal Content */}
                <AlertDialogContent className="bg-black text-white w-[350px] p-5 rounded-lg flex-col">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-white text-lg font-bold">
                           Comment for {post.name} 💭
                        </AlertDialogTitle>
                        <AlertDialogDescription></AlertDialogDescription>
                    </AlertDialogHeader>

                    {/* Form */}
                    <form className="flex flex-col gap-3" action={async (formData) => {
                        await createComment(formData);
                        setIsOpen(false);
                    }}>
                        
                        <input type="text" name="id" defaultValue={post.id} className=" hidden"/>

                        {/* Message Textarea */}
                        <textarea
                            maxLength={100}
                            className="w-full px-3 py-2 mt-1 bg-black border border-white rounded-md 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Write your Comment (max 100 characters)"
                            required
                            rows={5}
                            name="comment"
                        ></textarea>

                        {/* Footer */}
                        <AlertDialogFooter className="sm:flex-col-reverse">
                            <AlertDialogCancel
                                className="cursor-pointer w-full border-red-800 bg-red-800 hover:bg-red-600 
                                        text-white py-2 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </AlertDialogCancel>

                            <button
                                type="submit"
                                className="cursor-pointer w-full border-black bg-blue-700 hover:bg-blue-600 
                                        text-white py-2 rounded-md"
                            >
                                Comment
                            </button>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}