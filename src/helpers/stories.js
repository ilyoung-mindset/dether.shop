import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const storyWithStore = initialStore => story => (
  <Provider store={createStore(rootReducer, initialStore)}>{story()}</Provider>
);

export { storyWithStore };
