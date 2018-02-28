import * as types from './constants';

export const increment = () => ({ type: types.INCREMENT });
export const decrement = () => ({ type: types.DECREMENT });

export const asyncIncrement = () => ({ type: types.ASYNC_INCREMENT });
