import express from "express";
import UserRoutes from "./routes/V1/user.routes";
import AuthRoutes from './routes/V1/auth.routes';
import { authenticate } from "./middlewares/authentication";
import UserPersonalInformationRoute from './routes/V1/user.personal.information.routes';
import { apiLimiter } from "./middlewares/rate.limiter";

const app = express();

app.use(express.json());

app.use(apiLimiter);

app.use("/api/v1", AuthRoutes);
app.use(authenticate);
app.use("/api/v1", UserRoutes);
app.use('/api/v1', UserPersonalInformationRoute)
export default app;