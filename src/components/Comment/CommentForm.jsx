import { useState } from "react";
import toast from "react-hot-toast";

function CommentForm({ postId, onAddComment }) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content.trim()) return toast.error("Comment cannot be empty");

    const newComment = {
      id: Date.now(),
      author: author || "Anonyme",
      content,
      date: new Date().toLocaleString()
    };

    onAddComment(postId, newComment);
    setContent("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 p-4 bg-gray-900 rounded-lg shadow-md border border-gray-700">
      <input
        type="text"
        placeholder="Auteur"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        className="w-full mb-2 px-3 py-2 rounded border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <textarea
        placeholder="Commentaire"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="w-full mb-2 px-3 py-2 rounded border border-gray-600 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        rows={3}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        Comment
      </button>
    </form>
  );
}

export default CommentForm;