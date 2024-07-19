import express from "express";
import { signUp } from "../sign-up";
import { signIn } from "../login/controller";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

export default router