import express from "express";
import { signUp } from "../sign-up";
const router = express.Router();

router.post("/sign-up", signUp);

export default router