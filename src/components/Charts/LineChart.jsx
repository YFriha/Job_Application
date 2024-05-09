import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChartWithPoints = ({ data }) => {
  return (
    <div>
      <Line
        data={data}
        options={{
          // Customize chart options here
          scales: {
            x: {
              // Customize x-axis options here
            },
            y: {
              // Customize y-axis options here
            }
          },
          plugins: {
            // Add plugins options here
          },
          // Add other options as needed
        }}
      />
    </div>
  );
};

export default LineChartWithPoints;
