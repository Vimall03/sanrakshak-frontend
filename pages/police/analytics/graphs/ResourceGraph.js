import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const ResourceGraph = ({graphType}) => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const policeResourcesData = {
      PC: {
        available: 18,
        unavailable: 6,
        assigned: 23,
      },
      HC: {
        available: 10,
        unavailable: 1,
        assigned: 20,
      },
      ASI: {
        available: 6,
        unavailable: 1,
        assigned: 4,
      },
      SI: {
        available: 3,
        unavailable: 0,
        assigned: 2,
      },
      PI: {
        available: 1,
        unavailable: 0,
        assigned: 2,
      },
    };
    

    const personnelTypes = Object.keys(policeResourcesData);
    const resourceCategories = ['Available', 'Unavailable', 'Assigned']; // Predefined labels

    const datasets = personnelTypes.map((type) => ({
      label: type, // Resource type as label (optional)
      data: [
        policeResourcesData[type].available,
        policeResourcesData[type].unavailable,
        policeResourcesData[type].assigned,
      ],
      backgroundColor: resourceCategories.map((category) => {
        // Map colors based on category
        switch (category) {
          case 'Available':
            return 'rgba(54, 162, 235,1)'; // Light blue
          case 'Unavailable':
            return 'rgba(255, 99, 132,1)'; // Light red
          case 'Assigned':
            return 'rgba(255, 206, 86,1)'; // Light yellow
          default:
            return 'grey'; // Default color
        }
      }),
      borderColor: resourceCategories.map((category) => 'rgba(255, 255, 255, 1)'), // White border
      borderWidth: 2, // Border width
    }));
    

    setData({ labels: resourceCategories, datasets });
  }, []);
  
    const options = {
      // No need for separate y-axes configurations
      plugins: {
        legend: {
            display:true ,
            position: 'bottom',
            fullSize: false,
            align: 'start',
            
        }}

  };

  

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ResourceGraph;
