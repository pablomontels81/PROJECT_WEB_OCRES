import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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

class DiagTotDistance extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/31s5e83y/';

  render() {
    return (
      <p>On va y arriver un jour </p>
    );
  }
}
export default DiagTotDistance;