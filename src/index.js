import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import HelloComponent from './component/HelloComponent';
// import StateFullComponent from './container/StateFullComponent';
// import Video from './component/VideoComponent/Video.jsx';
import Home from './container/Home';


ReactDOM.render(
  <React.StrictMode>
    {/* dalaam <React.StrictMode> ini lah pemanggilan component agar dapt tampil di web browser*/}
    {/* <HelloComponent />
    <StateFullComponent />
    <Video /> */}
    {/* <App /> */}
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
