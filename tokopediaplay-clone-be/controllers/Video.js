import { createVideoService, getAllVideosService, getVideoByIdService } from "../services/Video.js";

export const createVideo = async (req, res) => {
    try {
        const { name, url_thumbnail } = req.body;

        const newVideo = await createVideoService(name, url_thumbnail);

        res.status(201).json({
            data: newVideo,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllVideos = async (req, res) => {
    try {
        const allVideos = await getAllVideosService();

        res.json({
            data: allVideos,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getVideoById = async (req, res) => {
    try {
        const { id } = req.params;

        const video = await getVideoByIdService(id);

        // check not found id
        if (!video || video === undefined) {
            return res.status(404).json({
                error: "can't find the video id",
            });
        }

        res.json({
            data: video,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};