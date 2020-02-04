import express, {Router} from 'express';
const router: Router = express.Router();
import <%= endpoint %>Ctl from '../controllers/<%= endpoint %>.controller';
const endpoint = '/<%= endpoint %>';

router.get(endpoint + '/:id', <%= endpoint %>Ctl.getById);
router.get(endpoint, <%= endpoint %>Ctl.list);
router.post(endpoint, <%= endpoint %>Ctl.add);
router.put(endpoint + '/:id', <%= endpoint %>Ctl.update);
router.delete(endpoint + '/:id', <%= endpoint %>Ctl.remove);
export = router;
