import express from "express";
import {postDonate} from "../controllers/donateController.js";

const router = express.Router();

router.post("/donate", postDonate);

export default router;

