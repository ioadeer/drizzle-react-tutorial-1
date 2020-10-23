import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import dirzzle functions and contract artifact
import { Drizzle, generateStore } from '@drizzle/store';
import MyStringStore from './contracts/MyStringStore.json';

import App from './App';
import * as serviceWorker from './serviceWorker';


const options = {
  contracts: [MyStringStore],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:9545',
    },
  },
};

const drizzle = new Drizzle(options);

ReactDOM.render(
  <App drizzle={drizzle} />,
  document.getElementById('root'),
);

//  ReactDOM.render(
//    <React.StrictMode>
//      <App />
//    </React.StrictMode>,
//    document.getElementById('root'),
//  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
