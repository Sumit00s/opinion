import { supabase } from "./supabase";

export async function getOpinions() {
    
    let { data, error } = await supabase
    .from('opinions')
    .select('*')
    .order('id',{ascending:false})

    if(error){
        console.log(error);
        throw new Error(error);
    }

    return data;
}
