import { addComment, getAllComments, getCommentById, getCommentByVideoId } from "../repositories/Comment.js";

export const createCommentService = (username, comment_text, video_id) => {
    const newComment = addComment(username, comment_text, video_id);

    return newComment;
};

export const getAllCommentsService = () => {
    const allComments = getAllComments();

    return allComments;
};

export const getCommentByIdService = (id) => {
    const comment = getCommentById(id);

    return comment;
};

export const getCommentByVideoIdService = (video_id) => {
    const comments = getCommentByVideoId(video_id);

    return comments;
};
