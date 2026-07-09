import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import db from "./config/database";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    const connection = await db.getConnection();
    console.log("✅ Database Connected");
    connection.release();

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error);
  }
}

startServer();