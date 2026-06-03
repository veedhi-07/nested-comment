import { useState } from "react";
import type { Comment } from "../../types/index";
import React from "react";
import CommmentForm from "../commentinput";

interface CommentItemProps {
  comment: Comment;
  onReply: (parentId: number, text: string) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

const CommentItem = React.memo(function CommentItem({
  comment,
  onReply,
  onDelete,
  onEdit,
}: CommentItemProps) {
  const [showReply, setShowReply] = useState(false);
  const [editing, setEditing] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  return (
    <div className="ml-6 mt-4 border-l-2 pl-4">
      {editing ? (
        <div className="flex gap-2">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-2"
          />
          <button
            onClick={() => {
              onEdit(comment.id, editText);
              setEditing(false);
            }}
            className=" bg-blue-400 h-8 w-20 ml-2 rounded text-white"
          >
            Save
          </button>
        </div>
      ) : (
        <p>{comment.text}</p>
      )}
      <div className="flex gap-2 mt-2">
        <button
          className=" border border-blue-500 p-0.5"
          onClick={() => setShowReply(!showReply)}
        >
          Reply
        </button>
        <button
          className=" border border-blue-500 p-0.5"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
        <button
          className=" border border-blue-500 p-0.5"
          onClick={() => onDelete(comment.id)}
        >
          Delete
        </button>

        {comment.children.length > 0 && (
          <button
            className=" border border-blue-500 p-0.5"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "Expand" : "Collapse"}
          </button>
        )}
      </div>
      {showReply && (
        <div className="mt-2">
          <CommmentForm
            placeholder="Reply.."
            onSubmit={(text) => {
              onReply(comment.id, text);
              setShowReply(false);
            }}
          />
        </div>
      )}

      {!collapsed &&
        comment.children.map((child) => (
          <CommentItem
            key={child.id}
            comment={child}
            onReply={onReply}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
    </div>
  );
});
export default CommentItem;
