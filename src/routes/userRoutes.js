import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "../controllers/userController.js";
import { verifyMongoId } from "../middleware/userMiddlewares.js";


const userRouter = Router();

userRouter.post("/", createUser);


userRouter.get("/", getAllUsers);

userRouter.get("/:id", verifyMongoId, getUserById);

userRouter.patch("/:id", verifyMongoId, updateUserById);

userRouter.delete("/:id", verifyMongoId, deleteUserById);


export default userRouter;

