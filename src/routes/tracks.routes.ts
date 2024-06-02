import { Router } from "express";
import {
  createTrack,
  deleteTrack,
  getAllLikedTracks,
  getAllTracks,
  likeTrack,
} from "../controllers/tracks.controller";

export const tracksRouter = Router();

tracksRouter.get("/", getAllTracks);

tracksRouter.post("/likeTrack", likeTrack);

tracksRouter.get("/likeTrack/:UserId", getAllLikedTracks);

tracksRouter.delete("/", deleteTrack);

tracksRouter.post("/", createTrack);
