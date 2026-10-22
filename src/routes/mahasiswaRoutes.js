import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/mahasiswaController.js';

const router = Router();

router.get('/',      getAll);
router.get('/:nim',  getById);
router.post('/',     create);
router.put('/:nim',  update);
router.delete('/:nim', remove);

export default router;
