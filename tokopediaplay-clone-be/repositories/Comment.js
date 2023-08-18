import Comment from "../models/Comment.js";

export const addComment = (username, comment_text, video_id) => {
    const newComment = Comment.create({ username, comment_text, video_id });

    return newComment;
};

export const getAllComments = () => {
    const allComments = Comment.find();

    return allComments;
};

export const getCommentById = (id) => {
    const Comment = Comment.findById({_id: id});

    return Comment;
};

export const getCommentByVideoId = (video_id) => {
    const comments = Comment.find({ video_id });

    return comments;
};