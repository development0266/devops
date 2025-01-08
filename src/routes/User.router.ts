import express from "express";
import { register } from "../controller/user.controller";

const UserRouter = express.Router();

UserRouter.post("/register", register);

export default UserRouter;
