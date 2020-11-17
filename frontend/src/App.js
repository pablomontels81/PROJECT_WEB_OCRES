import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import logo from './logo.svg';
import './App.css';
import calendrier from './calendrier';
import evenements from './evenements';
import record from './record';
import goals from './goals';
import totDistance from './totDistance';
import diagTotDistance from './diagTotDistance';
import statutEntrainement from './statutEntrainement';
import derniereActivite from './derniereActivite';

const data = [
  {
    name: 'L', velo: 4000, natation: 2400, course: 2400,
  },
  {
    name: 'Ma', velo: 3000, natation: 1398, course: 2210,
  },
  {
    name: 'Me', velo: 2000, natation: 9800, course: 2290,
  },
  {
    name: 'J', velo: 2780, natation: 3908, course: 2000,
  },
  {
    name: 'V', velo: 1890, natation: 4800, course: 2181,
  },
  {
    name: 'S', velo: 2390, natation: 3800, course: 2500,
  },
  {
    name: 'D', velo: 3490, natation: 4300, course: 2100,
  },
];


class App extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';
  
  render() {
    return (
      <div>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 4" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="velo" fill="#8884d8" />
        <Bar dataKey="natation" fill="#82ca9d" />
        <Bar dataKey="course" fill="#82ca8d" />
      </BarChart>

        <p>Hello !</p>

          
    </div>
    )
  }
}

export default App;
