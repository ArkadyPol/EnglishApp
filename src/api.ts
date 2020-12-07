import { Sentence, Task, Word } from './types';

const api = {
  addSentence(sentence: string) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ data: sentence }),
    };
    fetch('/sentence', options);
  },
  async getSentences() {
    const response = await fetch('/sentences');
    const result: Sentence[] = await response.json();
    return result.map((sentence) => sentence.Sentence);
  },
  async getTasks() {
    const response = await fetch('/tasks');
    const result: Task[] = await response.json();
    return result;
  },
  async getWords() {
    const response = await fetch('/words');
    const result: Word[] = await response.json();
    return result;
  },
};

export default api;
