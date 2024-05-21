import { createAction } from '@reduxjs/toolkit';


import { LanguageModel } from './types';

export const setLanguage = createAction<LanguageModel>('user/SET_LANGUAGE');

