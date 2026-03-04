import Comment from "./Comment";

function CommentList({ comments }) {
  return (
    <div className="mt-3">
      <h4 className="text-orange-400 font-semibold mb-2">Commentaires :</h4>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
      {comments.length === 0 && <p className="text-gray-400 text-sm">Pas encore de commentaires.</p>}
    </div>
  );
}

export default CommentList;