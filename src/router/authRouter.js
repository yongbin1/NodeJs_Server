import { Router } from "express";
import { userSignIn, userSignUp } from "../controller/authController";

const authRouter = Router();

// 로그인
authRouter.post("/sign-in", userSignIn);
// 회원가입
authRouter.post("/sign-up", userSignUp);

export default authRouter;
