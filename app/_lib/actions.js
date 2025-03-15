"use server";

import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function Updateupvote(id) {
    if (!id) {
        console.error("Invalid ID:", id);
        return null;
    }

    // Step 1: Get the current upvote count
    const { data: existingData, error: fetchError } = await supabase
        .from("opinions")
        .select("upvote")
        .eq("id", id)
        .single(); // Fetch only one record

    if (fetchError) {
        console.error("Error fetching upvote count:", fetchError);
        return null;
    }

    if (!existingData) {
        console.error(`No opinion found with ID: ${id}`);
        return null;
    }

    const newUpvoteCount = existingData.upvote + 1; // Increment

    // Step 2: Update with new count
    const { data, error } = await supabase
        .from("opinions")
        .update({ upvote: newUpvoteCount }) // Update with new count
        .eq("id", id)
        .select("*");

    if (error) {
        console.error("Error updating upvotes:", error);
        return null;
    }

    console.log("Updated upvote:", data);
    return data;
}

export async function Updatedownvote(id) {
    if (!id) {
        console.error("Invalid ID:", id);
        return null;
    }

    // Step 1: Get the current downvote count
    const { data: existingData, error: fetchError } = await supabase
        .from("opinions")
        .select("downvote")
        .eq("id", id)
        .single(); // Fetch only one record

    if (fetchError) {
        console.error("Error fetching downvote count:", fetchError);
        return null;
    }

    if (!existingData) {
        console.error(`No opinion found with ID: ${id}`);
        return null;
    }

    const newDownvoteCount = existingData.downvote + 1; // Increment

    // Step 2: Update with new count
    const { data, error } = await supabase
        .from("opinions")
        .update({ downvote: newDownvoteCount }) // Update with new count
        .eq("id", id)
        .select("*");

    if (error) {
        console.error("Error updating downvotes:", error);
        return null;
    }

    console.log("Updated downvote:", data);
    return data;
}


export async function createPost(formData) {
   const newPost = {
    name:formData.get('name'),
    branch:formData.get('branch'),
    message:formData.get('message'),
    upvote: 0,
    downvote: 0,
   }

   const { data, error } = await supabase
   .from("opinions")
   .insert([newPost])

   if (error) {
       throw new Error("Opinion could not be created");
   }

   revalidatePath(`/`)
}

export async function DeleteOpinion(id) {
   let {data,error} = await supabase.from('opinions').delete().eq('id',id);

   if(error){
    console.log("Error while deleting data from admin panel");
    throw new Error("Post cannot get deleted");
   }

   revalidatePath('/admin');

   return data;
}