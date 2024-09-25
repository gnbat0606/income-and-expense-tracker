import { Router } from "express";
import { loginController, signUpController } from "../users/index.js";
import { authMiddleware } from "../middlewares/auth.js";
import { currencyController } from "../users/currencyController.js";
import { balanceControl } from "../users/balanceControl.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.post("/user/currency", authMiddleware, currencyController);
userRouter.post("/user/balance", authMiddleware, balanceControl);

export default userRouter;
