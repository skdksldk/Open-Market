import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from "clayful/client-js";

import axios from "axios";
import "./css/auth.css";

clayful.config({ 
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjYyM2YyODMxMmUzMmY3NWE4YzA3ZmJmNjJlNTMzMjY0OWM0ZTUyMmM3NWE0ZWQ4NGJmMWFiM2UzZDMzNTRlMDAiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQyNTU5MzI4LCJzdG9yZSI6Ik43VVhUUE1XNTROTi5QTDU1NEZMU0RBU1QiLCJzdWIiOiIyQTNTVVpFTkxTTFIifQ.v9Dm_hZ9InLZ93liq-nX3m8x3MaT4c5Ve-yK3MeCynA'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
