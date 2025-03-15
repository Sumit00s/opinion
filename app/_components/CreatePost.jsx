'use client'

import {
    AlertDialog,
    AlertDialogAction,
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
  
  export default function CreatePost() {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <button onClick={() => setIsOpen(true)} className="fixed cursor-pointer bottom-10 right-0 -translate-x-1/2 p-4 bg-blue-800 font-bold text-2xl rounded-full mt-2 z-10">
            💭
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-black text-white w-[350px] p-5 rounded-lg flex-col">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white text-lg font-bold">
              Write Your Opinion 💭
            </AlertDialogTitle>
            <AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
  
          {/* Form Starts Here */}
          <form className="flex flex-col gap-3" action={async(formData)=>{
            await createPost(formData)
            setIsOpen(false)}}
          >
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-3 mt-1 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter There Name"
                required
              />
            </div>
  
            {/* Branch Dropdown */}
            <div>
              <select
                className="w-full px-3 py-3 mt-1 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="branch"
              >
                <option value='' disabled selected>
                  Select There Branch
                </option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Medical">Medical</option>
                <option value="FE">FE</option>
                <option value="computer">Computer</option>
                <option value="IT">IT</option>
                <option value="Aids">AIDS</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
                <option value="Instru">Instrumentation</option>
                <option value="Automation">Automation & Robotics</option>
                <option value="Entc">ENTC</option>
                <option value="Electrical">Electrical</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
  
            {/* Message Textarea */}
            <div>
              <textarea
                maxLength={150}
                className="w-full px-3 py-2 mt-1 bg-black border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your Opinion (max 150 characters)"
                required
                rows={5}
                name="message"
              ></textarea>
            </div>
  
            {/* Footer: Cancel & Submit Button */}
            <AlertDialogFooter className='sm:flex-col-reverse'>
                <AlertDialogCancel className=" cursor-pointer w-full border-black bg-red-800 hover:bg-red-600 text-white py-2 rounded-md">
                  Cancel
                </AlertDialogCancel>

                <button
                  type="submit"
                  className="cursor-pointer w-full border-black bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-md"
                >
                  Submit
                </button>

            </AlertDialogFooter>

          </form>
          <Link href="/privacy"><p className="text-blue-800 underline font-medium text-[15px]">Privacy Policy?</p></Link>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  