import Post from "./Post";

function PostList({ posts, onUpvote, onDownvote, onAddComment, onDeletePost, currentUser }) {
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
          onAddComment={onAddComment}
          onDeletePost={onDeletePost}
          currentUser={currentUser}
        />
      ))}
    </div>
  );
}

export default PostList;