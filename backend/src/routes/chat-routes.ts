import { Router } from "express";
import User from "../models/User.js";

const chatRoutes = Router();
chatRoutes.post("/new", userVerify);

export default chatRoutes;
