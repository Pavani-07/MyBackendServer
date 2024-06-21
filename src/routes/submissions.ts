import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const dbPath = path.join(__dirname, '../../db.json');

router.get('/count', (req, res) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }

        const submissions = JSON.parse(data.toString());
        const totalCount = submissions.length;

        res.json({ count: totalCount });
    });
});

export { router as submissionsRouter };
