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
