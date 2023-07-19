import express from "express";

import { postAnswer, deleteAnswer } from "../controllers/Answers.js";
import { voteQuestion } from "../controllers/Questions.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.patch("/post/:id", auth, postAnswer);
router.patch("/delete/:id", auth, deleteAnswer);
//router.patch("/vote/:id", voteQuestion);

export default router;
