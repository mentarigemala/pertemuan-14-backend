import db from "../config/database";

export interface Mahasiswa {
  id?: number;
  nim: string;
  nama: string;
  prodi: string;
  angkatan: number;
}

export const createMahasiswa = async (data: Mahasiswa) => {
  const { nim, nama, prodi, angkatan } = data;

  const [result] = await db.execute(
    `INSERT INTO mahasiswa (nim, nama, prodi, angkatan)
     VALUES (?, ?, ?, ?)`,
    [nim, nama, prodi, angkatan]
  );

  return result;
};

export const getAllMahasiswa = async () => {
  const [rows] = await db.execute(
    `SELECT * FROM mahasiswa ORDER BY id ASC`
  );

  return rows;
};

export const getMahasiswaById = async (id: number) => {
  const [rows]: any = await db.execute(
    `SELECT * FROM mahasiswa WHERE id = ?`,
    [id]
  );

  return rows[0];
};

export const updateMahasiswa = async (
  id: number,
  data: Mahasiswa
) => {
  const { nim, nama, prodi, angkatan } = data;

  const [result] = await db.execute(
    `UPDATE mahasiswa
     SET nim = ?, nama = ?, prodi = ?, angkatan = ?
     WHERE id = ?`,
    [nim, nama, prodi, angkatan, id]
  );

  return result;
};

export const deleteMahasiswa = async (id: number) => {
  const [result] = await db.execute(
    `DELETE FROM mahasiswa WHERE id = ?`,
    [id]
  );

  return result;
};