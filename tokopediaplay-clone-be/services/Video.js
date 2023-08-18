import { addVideo, getAllVideos, getVideoById } from "../repositories/Video.js";

export const createVideoService = (name, thumbnail) => {
    const newVideo = addVideo(name, thumbnail);

    return newVideo;
};

export const getAllVideosService = () => {
    const allVideos = getAllVideos();

    return allVideos;
};

export const getVideoByIdService = (id) => {
    const video = getVideoById(id);

    return video;
};
