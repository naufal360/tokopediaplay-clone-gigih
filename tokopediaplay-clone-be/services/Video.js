import { addVideo, getAllVideos, getVideoById } from "../repositories/Video.js";

export const createVideoService = (name, thumbnail, video_url) => {
    const newVideo = addVideo(name, thumbnail, video_url);

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
