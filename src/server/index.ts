import 'dotenv/config';
import pool from './mysql-helper';
import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import { addSentence, addWords } from './mysql-helper/insert';
import { readSentences } from './mysql-helper/select';
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
app.get('/sentences', async (req, res, next) => {
  try {
    const sentences = await readSentences(pool);
    res.json(sentences);
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
