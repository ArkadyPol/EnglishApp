import 'dotenv/config';
import pool from './mysql-helper';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import { addSentence, addWords } from './mysql-helper/insert';
import {
  readSentences,
  readSortedSentences,
  readWords,
} from './mysql-helper/select';
import { createTempTables } from './mysql-helper/create';

createTempTables(pool);

const app = express();
app.use(express.static(path.resolve(__dirname, '.')));
app.use(express.json());
app.post('/sentence', async (req, res) => {
  let sentence: string = req.body.data;
  sentence = sentence.replace(/’/g, "'");
  let regExp = /[a-z][a-z']*/gi;
  let words = sentence.match(regExp);
  if (!words) {
    res.end();
    return;
  }
  words = words.map((word) => word.toLowerCase());
  console.log(sentence);
  try {
    const insertId = await addSentence(pool, sentence);
    await addWords(pool, words, insertId);
  } catch (err) {
    console.error(err);
  }
  res.end();
});
app.get('/sentences/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const sentences = await readSentences(pool, +id);
    res.json(sentences);
  } catch (err) {
    next(err);
  }
});
app.get('/tasks/:page', async (req, res, next) => {
  const { page } = req.params;
  try {
    const tasks = await readSortedSentences(pool, +page);
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});
app.get('/words', async (req, res, next) => {
  try {
    const words = await readWords(pool);
    res.json(words);
  } catch (err) {
    next(err);
  }
});
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send({ error: err });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
