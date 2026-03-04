import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import PostForm from "./components/Post/PostForm";
import PostList from "./components/Post/PostList";

function App() {

  const CURRENT_USER = "User";
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
    toast.success("Your post has been published", { 
      icon: <FaCheck />, 
      style: { background: "#16a34a", color: "#fff", fontWeight: "bold" },
      duration: 2500
    });
  };

  const handleAddComment = (postId, newComment) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));
    toast.success("Your comment has been added!", { 
      icon: <FaCheck />, 
      style: { background: "#16a34a", color: "#fff", fontWeight: "bold" },
      duration: 2500
    });
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
    toast.success("Your post has been deleted", { 
      icon: <FaCheck />, 
      style: { background: "#16a34a", color: "#fff", fontWeight: "bold" },
      duration: 2500
    });
  };

  const handleUpvote = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, upvotes: post.upvotes + 1 }
        : post
    ));
    toast.success("You liked this post", { 
      icon: <FaCheck />, 
      style: { background: "#16a34a", color: "#fff", fontWeight: "bold" },
      duration: 2500
    });
  };

  const handleDownvote = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, downvotes: post.downvotes + 1 }
        : post
    ));
    toast.error("You didn't like this post", { 
      icon: <FaCheck />, 
      style: { background: "#dc2626", color: "#fff", fontWeight: "bold" },
      duration: 2500
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10 text-gray-200">
      <Toaster position="top-right" />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-orange-500 text-center">
          POST PUBLISHER
        </h1>

        <PostForm onAddPost={addPost} />

        <PostList
          posts={posts}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
          onAddComment={handleAddComment}
          onDeletePost={handleDeletePost}
          currentUser={CURRENT_USER}
        />
      </div>
    </div>
  );
}

export default App;