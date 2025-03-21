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
import { createPost } from "../_lib/actions";
import { useState } from "react";
import Link from "next/link";
import {MessageSquareText} from "lucide-react";

export default function CreatePost() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
            <button
              onClick={() => setIsOpen(true)}
              className="fixed flex justify-center items-center cursor-pointer bottom-10 right-5 p-4 text-white font-bold text-xl rounded-full 
                        bg-gradient-to-r from-purple-700 via-pink-700 to-blue-800 
                        animate-random-gradient shadow-lg shadow-black"
            >
              Create <MessageSquareText className="mx-1"/>
            </button>

            </AlertDialogTrigger>

            {/* Modal Content */}
            <AlertDialogContent className="bg-black text-white w-[350px] p-5 rounded-lg flex-col">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white text-lg font-bold">
                        Write Your Opinion 💭
                    </AlertDialogTitle>
                    <AlertDialogDescription></AlertDialogDescription>
                </AlertDialogHeader>

                {/* Form */}
                <form className="flex flex-col gap-3" action={async (formData) => {
                    await createPost(formData);
                    setIsOpen(false);
                }}>
                    {/* Name Input */}
                    <input
                        type="text"
                        name="name"
                        className="w-full px-3 py-3 mt-1 bg-black border border-white rounded-md 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Their Name"
                        required
                    />

                    {/* Branch Dropdown */}
                    <select
                        className="w-full px-3 py-3 mt-1 bg-black border border-white rounded-md 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                        name="branch"
                    >
                        <option value="" disabled selected>Select Their Branch</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Medical">Medical</option>
                        <option value="FE">FE</option>
                        <option value="Computer">Computer</option>
                        <option value="IT">IT</option>
                        <option value="AIDS">AIDS</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="Civil">Civil</option>
                        <option value="Instrumentation">Instrumentation</option>
                        <option value="Automation">Automation & Robotics</option>
                        <option value="ENTC">ENTC</option>
                        <option value="Electrical">Electrical</option>
                        <option value="MCA">MCA</option>
                        <option value="MBA">MBA</option>
                    </select>

                    {/* Message Textarea */}
                    <textarea
                        maxLength={150}
                        className="w-full px-3 py-2 mt-1 bg-black border border-white rounded-md 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your Opinion (max 150 characters)"
                        required
                        rows={5}
                        name="message"
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
                            Submit
                        </button>
                    </AlertDialogFooter>
                </form>

                {/* Privacy Policy */}
                <Link href="/privacy">
                    <p className="text-blue-800 underline font-medium text-[15px]">Privacy Policy?</p>
                </Link>
            </AlertDialogContent>
        </AlertDialog>
    );
}
