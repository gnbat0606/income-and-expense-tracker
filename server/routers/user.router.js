import { Router } from "express";
import { loginController, signUpController } from "../users/index.js";
import { authMiddleware } from "../middlewares/auth.js";
import { currencyController } from "../users/currencyController.js";
import { balanceController } from "../users/balanceController.js";
import { testController } from "../users/test.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.post("/user/currency", authMiddleware, currencyController);
userRouter.post("/user/balance", authMiddleware, balanceController);

userRouter.post("/user/test", testController);
export default userRouter;
