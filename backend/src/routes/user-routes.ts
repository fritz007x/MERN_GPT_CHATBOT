import { Router } from "express";
import {
  getAllUsers,
  userSignUp,
  userLogin,
  userLogout,
  userVerify,
} from "../controllers/user-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";

const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signUp", validate(signupValidator), userSignUp);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/logout", verifyToken, userLogout);

userRoutes.get("/auth-status", verifyToken, userVerify);

export default userRoutes;
