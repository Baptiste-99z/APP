import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: author || "Anonyme",
      date: new Date().toLocaleString(),
      upvotes: 0,
      downvotes: 0,
      comments: []
    };

    onAddPost(newPost);
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-900 p-6 rounded-xl shadow-md mb-6 border border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-4 text-orange-400">Publish a post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
        className="w-full border border-gray-700 rounded px-3 py-2 mb-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="w-full border border-gray-700 rounded px-3 py-2 mb-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
        rows={4}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        className="w-full border border-gray-700 rounded px-3 py-2 mb-3 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <button 
        type="submit"
        className="flex items-center gap-2 bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        <FaPlus size={20} /> Publish
      </button>
    </form>
  );
}

export default PostForm;