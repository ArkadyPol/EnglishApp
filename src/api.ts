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
  async getSentences(id: number) {
    const response = await fetch(`/sentences/${id}`);
    const result: Sentence[] = await response.json();
    return result;
  },
  async getTasks(page: number) {
    const response = await fetch(`/tasks/${page}`);
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
