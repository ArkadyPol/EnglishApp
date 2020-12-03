import { Sentence } from './types';

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
};

export default api;
