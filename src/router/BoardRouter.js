import { Router } from "express";
import {
  createBoard,
  deleteBoard,
  getBoard,
  getBoardList,
} from "../controller/Boardontroller";

const boardRouter = Router();

boardRouter.post("/", createBoard);
boardRouter.get("/", getBoard);
boardRouter.get("/list", getBoardList);
boardRouter.delete("/:id", deleteBoard);

export default boardRouter;
