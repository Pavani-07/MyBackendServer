import { Router } from 'express';

const router = Router();

router.get('/ping', (req, res) => {
    res.json(true);
});

export { router as indexRouter };
