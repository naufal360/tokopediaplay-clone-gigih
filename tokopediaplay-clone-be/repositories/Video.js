import mongoose from "mongoose";
import Video from "../models/Video.js";

export const addVideo = (name, thumbnail, video_url) => {
    const newVideo = Video.create({ name: name, url_thumbnail: thumbnail, video_url: video_url });

    return newVideo;
};

export const getAllVideos = () => {
    const allVideos = Video.find();

    return allVideos;
};

export const getVideoById = (id) => {
    // check valid id
    const checkId = mongoose.Types.ObjectId.isValid(id);
    if(!checkId) {
        return undefined;
    }

    const video = Video.findById({ _id: id });

    return video;
};