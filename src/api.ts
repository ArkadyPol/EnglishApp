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
};

export default api;
