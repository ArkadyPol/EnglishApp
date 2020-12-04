import { Pool } from 'mysql2/promise';

export const createUniqueWords = async (pool: Pool) => {
  const sql = `CREATE TEMPORARY TABLE IF NOT EXISTS UniqueWords AS
    SELECT (@row_number:=@row_number + 1) AS Num, Word, WordCount 
        FROM (SELECT Word, Count(WordID) AS WordCount FROM Words 
    GROUP BY Word
    ORDER BY Count(WordID) DESC) t1,
    (SELECT @row_number:=0) t2;`;
  try {
    const [rows] = await pool.query(sql);
    console.log(rows);
  } catch (err) {
    console.error(err);
  }
};
