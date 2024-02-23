import React from 'react';
import {Box} from '../styles/box';
import Chart, {Props} from 'react-apexcharts';

const state: Props['series'] = [
   {
      name: 'Series1',
      data: [31, 40, 28, 51, 42, 109, 100],
   },
   {
      name: 'Series2',
      data: [11, 32, 45, 32, 34, 52, 41],
   },
];

const options = {
   chart: {
     type: 'bar', // Changed from 'area' to 'bar'
     animations: {
       easing: 'linear',
       speed: 300,
     },
     // Other chart options as needed...
     stacked: false, // Assuming the chart in the image is not stacked
   },
   xaxis: {
     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Updated categories to months
     // Other xaxis options as needed...
   },
   // Other options as needed...
   stroke: {
     curve: 'straight', // Assuming a bar chart does not need a curve option
   },
   fill: {
     colors: ['#yourColor1', '#yourColor2'], // Replace with actual colors from the image
   },
   markers: {
     size: 0, // Assuming markers are not needed for a bar chart
   },
 };
export const Steam = () => {
   return (
      <>
          <Box css={{ width: '100%', zIndex: 5 }}>
      <div id="chart">
        <Chart options={options} series={state} type="bar" height={350} />
      </div>
    </Box>
      </>
   );
};
