import { useState } from "react";
import CommentList from "../Comment/CommentList";
import CommentForm from "../Comment/CommentForm";
import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";

function Post({ post, onUpvote, onDownvote, onAddComment, onDeletePost, currentUser }) {
  const [showComments, setShowComments] = useState(false);
  const score = post.upvotes - post.downvotes;

  const handleUpvote = () => { onUpvote(post.id); toast.success("You liked this post"); };
  const handleDownvote = () => { onDownvote(post.id); toast.error("You didn't like this post"); };
  const handleDelete = () => { onDeletePost(post.id); toast.success("Your post has been deleted"); };

  return (
    <div className="bg-gray-800 rounded-xl shadow-md p-6 mb-6 border border-gray-700">
      <h2 className="text-xl font-bold mb-2 text-orange-400">{post.title}</h2>
      <p className="text-gray-300 mb-2">{post.content}</p>
      <p className="text-sm text-gray-500 mb-3">By {post.author} • {post.date}</p>

    <div className="flex items-center gap-3 mb-3">
      <button 
        onClick={handleUpvote} 
        className="text-green-500 font-bold hover:text-green-400 transition flex items-center gap-1"
      >
        <FaArrowUp size={16} /> LIKE
      </button>
      <span className="font-semibold text-white">{score}</span>
      <button 
        onClick={handleDownvote} 
        className="text-red-500 font-bold hover:text-red-400 transition flex items-center gap-1"
      >
        <FaArrowDown size={16} /> DISLIKE
      </button>
      {post.author === currentUser && (
        <button 
          onClick={handleDelete} 
          className="ml-auto flex items-center gap-1 text-sm text-gray-400 hover:text-red-500 transition"
        >
          <FaTrash size={16} /> Delete
        </button>
      )}
    </div>

      <button 
        onClick={() => setShowComments(!showComments)} 
        className="text-blue-400 text-sm hover:underline mb-3"
      >
        {showComments ? "Hide" : "Show"} comments ({post.comments.length})
      </button>

      {showComments && (
        <div className="mt-4">
          <CommentList comments={post.comments} />
          <CommentForm postId={post.id} onAddComment={onAddComment} />
        </div>
      )}
    </div>
  );
}

export default Post;