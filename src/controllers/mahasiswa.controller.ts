import { Request, Response } from "express";
import {
  createMahasiswa,
  getAllMahasiswa,
  getMahasiswaById,
  updateMahasiswa,
  deleteMahasiswa,
} from "../models/mahasiswa.model";

export const create = async (req: Request, res: Response) => {
  try {
    await createMahasiswa(req.body);

    res.status(201).json({
      message: "Data mahasiswa berhasil ditambahkan",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const data = await getAllMahasiswa();

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const data = await getMahasiswaById(id);

    if (!data) {
      return res.status(404).json({
        message: "Mahasiswa tidak ditemukan",
      });
    }

    res.json(data);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await updateMahasiswa(id, req.body);

    res.json({
      message: "Data mahasiswa berhasil diupdate",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await deleteMahasiswa(id);

    res.json({
      message: "Data mahasiswa berhasil dihapus",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};