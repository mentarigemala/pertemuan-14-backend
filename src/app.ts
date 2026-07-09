import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import mahasiswaRoutes from "./routes/mahasiswa.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/mahasiswa", mahasiswaRoutes);

app.get("/", (req, res) => {
  res.send("Backend Webdin berjalan 🚀");
});

export default app;

