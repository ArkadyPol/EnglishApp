import { FieldPacket, RowDataPacket } from 'mysql2/promise';

export type Sentence = {
  Sentence: string;
};
export type Task = {
  Num: number;
  Sentence: string;
  SentenceID: number;
  Word: string;
};
export type Word = {
  Num: number;
  Word: string;
};

export type Page = 'learn' | 'add' | 'sentences' | 'tasks' | 'words';

export type QueryResult = [RowDataPacket[], FieldPacket[]];
