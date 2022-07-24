import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import store to React application  in index.js to include store and provide 
//the data to the App.js level
import { store} from './store'
import { Provider } from 'react-redux'

//rendering store - wrapping App init
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);