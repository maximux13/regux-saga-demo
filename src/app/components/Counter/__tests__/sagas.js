import { take, put, select } from 'redux-saga/effects';

import * as types from '../constants';
import { counterSagas } from '../sagas';

describe('test redux saga', () => {
  test('demo saga', () => {
    const iterator = counterSagas();

    expect(iterator.next().value).toEqual(put({ type: types.INCREMENT }));
  });
});
