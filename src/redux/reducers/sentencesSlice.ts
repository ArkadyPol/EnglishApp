import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import api from '../../api';
import { Sentence } from '../../types';

const initialState = {
  sentences: [] as Sentence[],
  lastId: 0,
};

const sentencesSlice = createSlice({
  name: 'sentences',
  initialState: initialState,
  reducers: {
    loadSentences: (state, action: PayloadAction<Sentence[]>) => {
      state.sentences.push(...action.payload);
    },
    setLastId: (state, action: PayloadAction<number>) => {
      state.lastId = action.payload;
    },
  },
});

export const { loadSentences, setLastId } = sentencesSlice.actions;

export default sentencesSlice.reducer;

export const get = (): AppThunk => async (dispatch, getState) => {
  const lastId = getState().sentences.lastId;
  const sentences = await api.getSentences(lastId);
  if (sentences.length) {
    dispatch(loadSentences(sentences));
    const newId = sentences[sentences.length - 1].SentenceID;
    dispatch(setLastId(newId));
  }
};
