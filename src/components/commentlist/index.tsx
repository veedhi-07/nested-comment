import type { Comment } from "../../types/index";
import CommentItem from "../commentitem";

interface CommentListProps {
  comments: Comment[];
  onReply: (parentId: number, text: string) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

export default function CommentList({
  comments,
  onReply,
  onDelete,
  onEdit,
}: CommentListProps) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onDelete={onDelete}
          onReply={onReply}
          onEdit={onEdit}
        />
      ))}
    </>
  );
}
