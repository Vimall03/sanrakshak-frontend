import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const CrimeTrend = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      { 
        lineTension: 0.3,
        label: 'This Week Cases (Solid)',
        data: [],
        borderColor: 'rgba(255, 99, 132, 1)', // Solid blue line
        backgroundColor: 'rgba(255, 99, 132, 0)', // Transparent background
        borderDash: [5, 3], // Dashed line style
      },
      {
        lineTension: 0,
        label: 'Past Week Cases (Dashed)',
        data: [],
        borderColor: 'rgba(54, 162, 235, 1)', // Dashed green line
        backgroundColor: 'rgba(54, 162, 235, 0)', // Transparent background
      },
    ],
  });

  useEffect(() => {
    const caseTrendData = {
      "caseTrend": {
        "thisWeek": [
          { "day": "Monday", "cases": 200 },
          { "day": "Tuesday", "cases": 180 },
          { "day": "Wednesday", "cases": 220 },
          { "day": "Thursday", "cases": null },
          { "day": "Friday", "cases": null },
          { "day": "Saturday", "cases": null },
          { "day": "Sunday", "cases": null }
        ],
        "pastWeek": [
          { "day": "Monday", "cases": 180 },
          { "day": "Tuesday", "cases": 175 },
          { "day": "Wednesday", "cases": 190 },
          { "day": "Thursday", "cases": 200 },
          { "day": "Friday", "cases": 210 },
          { "day": "Saturday", "cases": 200 },
          { "day": "Sunday", "cases": 190 }
        ]
      }
    };

    const labels = caseTrendData.caseTrend.thisWeek.map((day) => day.day);
    const thisWeekCases = caseTrendData.caseTrend.thisWeek.map((day) => day.cases);
    const pastWeekCases = caseTrendData.caseTrend.pastWeek.map((day) => day.cases);

    setData({
      labels,
      datasets: [
        { ...data.datasets[0], data: thisWeekCases },
        { ...data.datasets[1], data: pastWeekCases },
      ],
    });
  }, []);

  const options = {
    // No need for separate y-axes configurations
    plugins: {
      legend: {
          display: true,
      }}
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default CrimeTrend;
