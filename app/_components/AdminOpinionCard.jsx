"use client"

import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import {Trash } from "lucide-react";
import { DeleteOpinion } from "../_lib/actions";

export default function AdminOpinionCard({opinion}){


    return(
        <Card className='w-[350px] my-5 mx-auto border-[0.5px] bg-black text-white'>
            <CardHeader>
                <CardTitle className='flex justify-between w-full mb-2'>
                    <p><span className=" text-slate-500">for:</span> <span className=" text-white rounded-full px-2 py-0.5">{opinion.name}</span></p>
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
            <CardFooter className='gap-3'>
                <button className=" cursor-pointer w-full bg-red-800 p-2 rounded-sm" onClick={()=>DeleteOpinion(opinion.id)}><Trash/></button>
            </CardFooter>
            
        </Card>
    )
}