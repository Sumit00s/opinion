export default function CommentsList({ comments }) {
    return (
        <div>
            <h1 className="font-bold text-2xl">Comments</h1>
            {comments.map((comment) => {
                const formattedDate = new Date(comment.created_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                });

                return (
                    <div key={comment.id} className="w-full bg-black border-1 text-white p-3 rounded-md my-5">
                        <p className="text-gray-400 text-sm">{formattedDate}</p>
                        <h3 className=" font-semibold">{comment.comment}</h3>
                    </div>
                );
            })}
        </div>
    );
}

