import { Request, Response } from 'express';
import { readDb, writeDb } from '../utils/db';
import { Submission } from '../models/submission';

export const addSubmission = (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const db = readDb();
    const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };
    db.submissions.push(newSubmission);
    writeDb(db);
    res.json({ message: 'Submission successful' });
};

export const getSubmission = (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string);
    const db = readDb();
    if (index >= 0 && index < db.submissions.length) {
        res.json(db.submissions[index]);
    } else {
        res.status(404).json({ message: 'Submission not found' });
    }
};
