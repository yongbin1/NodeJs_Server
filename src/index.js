import express from "express";
import authRouter from "./router/authRouter";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 8081;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/auth", authRouter);

// 8080 포트번호로 서버를 킨다
app.listen(PORT, () => {
  console.log(`✅ http://localhost:${PORT}`);
});
