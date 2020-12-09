import { Pool } from 'mysql2/promise';
import { QueryResult } from '../../types';

export const readSentences = async (pool: Pool, id: number) => {
  const [rows] = (await pool.execute(
    `SELECT SentenceID, Sentence FROM Sentences
    Where SentenceID > ?
    ORDER BY SentenceID
    LIMIT 25;`,
    [id]
  )) as QueryResult;
  console.log(rows[0]);
  return rows;
};

export const readSortedSentences = async (pool: Pool) => {
  const sql = `SELECT s.SentenceID, s.Sentence, s.Num, UniqueWords.Word
    FROM SortedSentences AS s
    INNER JOIN UniqueWords ON s.Num=UniqueWords.Num`;
  const [rows] = (await pool.query(sql)) as QueryResult;
  console.log(rows[0]);
  console.log('length of rows: ', rows.length);
  return rows;
};

export const readWords = async (pool: Pool) => {
  const [rows] = (await pool.query(
    'SELECT Num, Word FROM UniqueWords'
  )) as QueryResult;
  console.log(rows[0]);
  console.log('length of rows: ', rows.length);
  return rows;
};
