import { Pool } from 'mysql2/promise';
import { QueryResult } from '../../types';

export const readSentences = async (pool: Pool, id: number) => {
  const sql = `SELECT SentenceID, Sentence FROM Sentences
  WHERE SentenceID > ?
  ORDER BY SentenceID
  LIMIT 60;`;
  const [rows] = (await pool.execute(sql, [id])) as QueryResult;
  console.log(rows[0]);
  return rows;
};

export const readSortedSentences = async (pool: Pool, page: number) => {
  const sql = `SELECT s.SentenceID, s.Sentence, s.Num, UniqueWords.Word
    FROM SortedSentences AS s
    INNER JOIN UniqueWords ON s.Num=UniqueWords.Num
    LIMIT ?, 100;`;
  const [rows] = (await pool.execute(sql, [(page - 1) * 100])) as QueryResult;
  console.log(rows[0]);
  console.log('length of rows: ', rows.length);
  return rows;
};

export const readWords = async (pool: Pool) => {
  const [rows] = (await pool.execute(
    'SELECT Num, Word FROM UniqueWords'
  )) as QueryResult;
  console.log(rows[0]);
  console.log('length of rows: ', rows.length);
  return rows;
};
