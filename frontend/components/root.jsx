import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Median from './median';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Median />
      </HashRouter>
    </Provider>
  )
};

export default Root;