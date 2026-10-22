import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/barangController.js';

const router = Router();

router.get('/',        getAll);
router.get('/:kode',   getById);
router.post('/',       create);
router.put('/:kode',   update);
router.delete('/:kode', remove);

export default router;
