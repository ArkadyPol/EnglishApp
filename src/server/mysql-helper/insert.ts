import { Pool, ResultSetHeader } from 'mysql2/promise';

export const addSentence = async (pool: Pool, sentence: string) => {
  const [rows] = await pool.execute(
    `INSERT INTO Sentences(sentence)
VALUES (?);`,
    [sentence]
  );
  console.log(rows);
  const { insertId } = rows as ResultSetHeader;
  return insertId;
};

export const addWords = async (
  pool: Pool,
  words: string[],
  insertId: number
) => {
  const wordsArray = words.map((word) => [insertId, word]);
  console.log(wordsArray);
  const [rows] = await pool.query(
    `INSERT INTO Words(SentenceID, Word)
       VALUES ?;`,
    [wordsArray]
  );
  console.log(rows);
};
