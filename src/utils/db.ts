import fs from 'fs';
import { Submission } from '../models/submission';

interface DbSchema {
    submissions: Submission[];
}

const dbFilePath = './db.json';

export const readDb = (): DbSchema => {
    const data = fs.readFileSync(dbFilePath, 'utf-8');
    return JSON.parse(data);
};

export const writeDb = (db: DbSchema) => {
    fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2));
};
