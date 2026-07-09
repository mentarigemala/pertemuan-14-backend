import { Router } from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/mahasiswa.controller";

import { authenticate } from "../middlewares/auth.middleware";
import { allowRoles } from "../middlewares/role.middleware";

const router = Router();

// Semua role bisa melihat data
router.get("/", authenticate, allowRoles("admin", "operator", "viewer"), getAll);

// Semua role bisa melihat detail
router.get("/:id", authenticate, allowRoles("admin", "operator", "viewer"), getById);

// Hanya admin yang boleh menambah
router.post("/", authenticate, allowRoles("admin"), create);

// Hanya admin yang boleh mengubah
router.put("/:id", authenticate, allowRoles("admin"), update);

// Hanya admin yang boleh menghapus
router.delete("/:id", authenticate, allowRoles("admin"), remove);

export default router;