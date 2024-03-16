import express from "express";
import { Create, getAll,Get, Update, Delete } from "../controller/books.js";

const router=express.Router();

// links
router.post('/books',Create);
router.get('/books',getAll);
router.get('/books/:id',Get);
router.put('/books/:id',Update);
router.delete('/books/:id',Delete);

export default router;