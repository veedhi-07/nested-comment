import type { Comment } from "../../types/index";

export function addReply(
  comments: Comment[],
  parentId: number,
  text: string,
): Comment[] {
  return comments.map((comment) => {
    if (comment.id === parentId) {
      return {
        ...comment,
        //add new child
        children: [
          //copy existing reply
          ...comment.children,
          //add new reply
          {
            id: Date.now(),
            text,
            children: [],
          },
        ],
      };
    }
    //for search in children
    //recursive
    return {
      ...comment,
      children: addReply(comment.children, parentId, text),
    };
  });
}

export function editComment(
  comments: Comment[],
  id: number,
  newText: string,
): Comment[] {
  return comments.map((comment) => {
    if (comment.id === id) {
      return {
        ...comment,
        text: newText,
      };
    }
    //if not found search in children
    return {
      ...comment,
      children: editComment(comment.children, id, newText),
    };
  });
}

export function deleteComment(comments: Comment[], id: number): Comment[] {
  return comments
    .filter((comment) => comment.id !== id)
    .map((comment) => ({
      ...comment,
      children: deleteComment(comment.children, id),
    }));
}
