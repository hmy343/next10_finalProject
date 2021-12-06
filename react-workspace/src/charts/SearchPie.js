import React, { PureComponent } from 'react';
import { PieChart, Pie, Label, Legend, Sector, Cell, ResponsiveContainer } from 'recharts';

const data1 = [
  { name: '자연관광지', value: 17 },
  { name: '역사관광지', value: 5 },
  { name: '휴양관광지', value: 5 },
  { name: '기타관광지', value: 13 },
];
const data2 = [ // A : 자연관광지
  { name: 'A1', value: 1 },
  { name: 'A2', value: 1 },
  { name: 'A3', value: 1 },
  { name: 'A4', value: 7 },
  { name: 'A5', value: 7 },
  { name: 'B1', value: 4 },
  { name: 'B2', value: 1 },
  { name: 'C1', value: 1 },
  { name: 'C2', value: 1 },
  { name: 'C3', value: 1 },
  { name: 'C4', value: 1 },
  { name: 'C5', value: 1 },
  { name: 'D1', value: 2 },
  { name: 'D2', value: 1 },
  { name: 'D3', value: 1 },
  { name: 'D4', value: 4 },
  { name: 'D5', value: 5 },
];

export default class SearchPie extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-of-two-levels-gor24';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data1} name="유형 대" dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data2} name="유형 소"dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
