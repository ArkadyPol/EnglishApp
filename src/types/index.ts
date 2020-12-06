export type Sentence = {
  Sentence: string;
};
export type Task = {
  Num: number;
  Sentence: string;
  SentenceID: number;
  Word: string;
};
export type Page = 'learn' | 'add' | 'sentences' | 'tasks';
