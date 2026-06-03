import { useCallback } from "react";
import "./App.css";
import CommentForm from "./components/commentinput";
import CommentList from "./components/commentlist";
import { useLocalStorage } from "./hooks/uselocalstorage";
import type { Comment } from "./types";
import { addReply, deleteComment, editComment } from "./utils/helper";
function App() {
  const [comments, setComments] = useLocalStorage<Comment[]>("comments", []);

  const addRootComment = (text: string) => {
    const newComment: Comment = {
      id: Date.now(),
      text,
      children: [],
    };

    setComments((prev) => [...prev, newComment]);
  };

  const handleReply = useCallback((parentId: number, text: string) => {
    setComments((prev) => addReply(prev, parentId, text));
  }, []);

  const handleDelete = useCallback((id: number) => {
    setComments((prev) => deleteComment(prev, id));
  }, []);

  const handleEdit = useCallback((id: number, text: string) => {
    setComments((prev) => editComment(prev, id, text));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Nested Comment System</h1>
      <CommentForm placeholder="Add Comment..." onSubmit={addRootComment} />
      <div className="mt-6">
        <CommentList
          comments={comments}
          onReply={handleReply}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
