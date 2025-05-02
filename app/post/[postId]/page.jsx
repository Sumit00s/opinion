import OpinionCard from "@/app/_components/OpinionCard";
import { getCommentsByPostId, getPostById } from "@/app/_lib/actions";
import CommentsList from "@/app/_components/CommentsList";
import CommentCard from "@/app/_components/CommentCard";
import Notice from "@/app/_components/Notice";

export default async function Post({ params }) {
    const { postId } = params;

    if (!postId) {
        throw new Error("Post ID is required");
    }

    let post = await getPostById(postId);
    let comments = await getCommentsByPostId(postId);

    console.log(comments)
    return (
        <div className="mt-10 w-full mx-auto">
               {/* {post.length == 0 ? <h1 className="text-center font-bold text-white text-2xl">No Opinion Found...</h1> : <OpinionCard opinion={post[0]} />}


                <CommentCard post={post[0]}/>
               {/* Previos Commnets */}
               {/* <div className="mt-10 w-[350px] mx-auto">
                    {comments.length == 0 
                    ? <h1 className=" font-bold text-2xl text-center">No Comments for {post[0].name}</h1>
                    : <CommentsList comments={comments}/>
                    }
               </div> */} 
               <Notice/>
        </div>
    );
}
