import React, { useState, useEffect } from 'react';
import { Bar, Doughnut, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';

const BeatWiseCrime = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Number of Crimes',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(90, 171, 222, 1)',
          'rgba(217, 83, 79, 1)',
          'rgba(26, 188, 156, 1)',
          'rgba(152, 78, 163, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(90, 171, 222, 1)',
          'rgba(217, 83, 79, 1)',
          'rgba(26, 188, 156, 1)',
          'rgba(152, 78, 163, 1)',
        ],
      },
    ],
  });

  useEffect(() => {
    const beatData = {
      "beatData": [
        { "beatNumber": 1, "numberOfCrimes": 25 },
        { "beatNumber": 2, "numberOfCrimes": 18 },
        { "beatNumber": 3, "numberOfCrimes": 30 },
        { "beatNumber": 4, "numberOfCrimes": 15 },
        { "beatNumber": 5, "numberOfCrimes": 20 },
        { "beatNumber": 6, "numberOfCrimes": 22 },
        { "beatNumber": 7, "numberOfCrimes": 28 },
      ]
    };

    const labels = beatData.beatData.map((beat) => `Beat ${beat.beatNumber}`);
    const crimes = beatData.beatData.map((beat) => beat.numberOfCrimes);

    setData({
      labels,
      datasets: [
        { ...data.datasets[0], data: crimes },
      ],
    });
  }, []);

  const options = {
    // No need for separate y-axes configurations
    plugins: {
      legend: {
          display:false ,
          position: 'bottom',
          fullSize: false
      }}
  };

  return (
    <div className='h-[100%] pb-0 mb-0  flex justify-center'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BeatWiseCrime;
