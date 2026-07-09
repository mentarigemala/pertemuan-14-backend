import db from "../config/database";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role?: "admin" | "operator" | "viewer";
}

export const createUser = async (user: User) => {
  const sql = `
    INSERT INTO users (name, email, password, role)
    VALUES (?, ?, ?, ?)
  `;

  const [result] = await db.execute(sql, [
    user.name,
    user.email,
    user.password,
    user.role || "viewer",
  ]);

  return result;
};

export const getUserByEmail = async (email: string) => {
  const sql = `
    SELECT * FROM users
    WHERE email = ?
  `;

  const [rows]: any = await db.execute(sql, [email]);

  return rows[0];
};