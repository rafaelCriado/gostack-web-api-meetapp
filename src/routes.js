import { Router } from "express";

const router = new Router();

router.get("/", (req, res) => res.send({ ok: true }));

export default router;
