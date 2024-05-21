import { createAction } from '@reduxjs/toolkit';

const PREFIX = 'app';

export const resetStore = createAction(`${PREFIX}/RESET_STORE`);
export const resetStoreByUser = createAction(`${PREFIX}/RESET_STORE_BY_USER`);
