import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrafficLight from './TrafficLight';


const root = ReactDOM.render(<TrafficLight />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>,
);

