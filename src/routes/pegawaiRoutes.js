import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/pegawaiController.js';

const router = Router();

router.get('/',      getAll);
router.get('/:nip',  getById);
router.post('/',     create);
router.put('/:nip',  update);
router.delete('/:nip', remove);

export default router;
