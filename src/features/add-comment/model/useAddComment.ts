import { toast } from "react-toastify";
import { generateId } from "@/shared/utils";
import { productApi } from "@/shared/api/ProductApi";
import { IComment } from "@/entities/comment/model/comment";
import { Dispatch, SetStateAction } from "react";
import { currentUser } from "@/entities/user/model/user";

export const useAddComment = (
  commentText: string,
  comments: IComment[],
  id: string,
  setComments: Dispatch<SetStateAction<IComment[]>>,
  setCommentText: Dispatch<SetStateAction<string>>
) => {
  
  const handlePostComment = async () => {
    if (!commentText.trim()) {
      toast.error("Comment cannot be empty!");
      return;
    }

    const newComment: IComment = {
      id: generateId(),
      content: commentText,
      user: { ...currentUser },
    };

    const updatedComments = [newComment, ...comments];
    toast.info("Sending your comment...");

    try {
      await productApi.sendComment(updatedComments, id as string);
      setComments(updatedComments);
      toast.success("Comment sent successfully!");
    } catch {
      toast.error("Failed to send comment. Please try again.");
    } finally {
      setCommentText("");
    }
  };

  return {
    handlePostComment
  }
};
