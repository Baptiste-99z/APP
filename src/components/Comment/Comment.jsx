function Comment({ comment }) {
  return (
    <div className="ml-4 mt-3 p-3 bg-gray-800 rounded-lg shadow-md border border-gray-700">
      <p className="font-semibold text-orange-400">{comment.author}</p>
      <p className="text-gray-300">{comment.content}</p>
      <p className="text-xs text-gray-500">{comment.date}</p>
    </div>
  );
}

export default Comment;