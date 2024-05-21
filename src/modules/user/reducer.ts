import { createReducer } from '@reduxjs/toolkit';

import { setLanguage } from './actions';
import { UserState } from './types';

export const initialState: UserState = {

  language: {
    lang: 'English',
    code: 'en',
    isAuto: true,
  },

};

export const userReducer = createReducer(initialState, builder =>
  builder
    .addCase(setLanguage, (state, { payload }) => {
      state.language = payload;
    })
);
