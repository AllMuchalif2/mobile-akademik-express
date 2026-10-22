import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/wargaController.js';

const router = Router();

router.get('/',       getAll);
router.get('/:nik',   getById);
router.post('/',      create);
router.put('/:nik',   update);
router.delete('/:nik', remove);

export default router;
