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

export const createSentences = async (pool: Pool) => {
  const sql = `CREATE TABLE Sentences (
    SentenceID int NOT NULL AUTO_INCREMENT,
    Sentence varchar(1500) NOT NULL,
    Translation varchar(1500),
    UNIQUE(Sentence),
    PRIMARY KEY(SentenceID)
  )`;
  try {
    const result = await pool.query(sql);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export const createWords = async (pool: Pool) => {
  const sql = `CREATE TABLE Words (
    WordID int NOT NULL AUTO_INCREMENT,
    SentenceID int NOT NULL,
    Word varchar(255) NOT NULL,
    PRIMARY KEY(WordID),
    FOREIGN KEY (SentenceID) REFERENCES Sentences(SentenceID)
  )`;
  try {
    const result = await pool.query(sql);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
