import { FieldPacket, Pool, RowDataPacket } from 'mysql2/promise';

export const readSentences = async (pool: Pool) => {
  const [rows] = (await pool.execute(`SELECT Sentence FROM Sentences`)) as [
    RowDataPacket[],
    FieldPacket[]
  ];
  console.log(rows[0]);
  console.log('length of rows: ', rows.length);
  return rows;
};

export const readSortedSentences = async (pool: Pool) => {
  const sql = `SELECT s.SentenceID, s.Sentence, s.Num, UniqueWords.Word
    From SortedSentences AS s
    INNER JOIN UniqueWords ON s.Num=UniqueWords.Num`;
  const [rows] = await pool.query(sql);
  console.log(rows);
};
