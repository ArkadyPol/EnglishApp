import { Pool } from 'mysql2/promise';

const createUniqueWords = async (pool: Pool) => {
  const sql = `CREATE TEMPORARY TABLE IF NOT EXISTS UniqueWords AS
    SELECT (@row_number:=@row_number + 1) AS Num, Word, WordCount 
        FROM (SELECT Word, Count(WordID) AS WordCount FROM Words 
    GROUP BY Word
    ORDER BY Count(WordID) DESC, Word) t1,
    (SELECT @row_number:=0) t2;`;
  const [rows] = await pool.query(sql);
  console.log(rows);
};

const createSortedSentences = async (pool: Pool) => {
  const sql = `CREATE TEMPORARY TABLE IF NOT EXISTS SortedSentences AS
  SELECT Words.SentenceID, Sentences.Sentence, MAX(UniqueWords.Num) as Num
  From Words
  INNER JOIN UniqueWords ON Words.Word=UniqueWords.Word
  INNER JOIN Sentences ON Words.SentenceID=Sentences.SentenceID
  GROUP BY Words.SentenceID
  ORDER BY Num`;
  const [rows] = await pool.query(sql);
  console.log(rows);
};

export const createTempTables = async (pool: Pool) => {
  try {
    await createUniqueWords(pool);
    await createSortedSentences(pool);
  } catch (err) {
    console.error(err);
  }
};
