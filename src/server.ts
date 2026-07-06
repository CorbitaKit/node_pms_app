import express, { Response, Request } from "express";
import UserRoutes from "./routes/V1/user.routes";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});


app.use("/api/v1", UserRoutes);

export default app;