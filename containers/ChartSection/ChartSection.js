import React from 'react';
import classes from './ChartSection.module.css';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const ChartSection = () => {
  const labels = useSelector((state) => state.dataSection.chartSection.labels);
  const datasets = useSelector(
    (state) => state.dataSection.chartSection.datasets
  );
  const chartTitle = useSelector((state) => state.dataSection.country);

  const datasetsArray = [];
  for (let key in datasets) {
    datasetsArray.push(datasets[key]);
  }

  const data = {
    labels: labels,
    datasets: datasetsArray,
  };

  return (
    <div className={classes.ChartSection}>
      <div className={classes.ChartDiv}>
        <Line
          data={data}
          width={400}
          height={300}
          options={{
            maintainAspectRatio: false,
            title: {
              text: `Covid19 - ${chartTitle}`,
              fontSize: 18,
              position: 'top',
              display: true,
            },
            legend: {
              position: 'bottom',
            },
          }}
        />
      </div>
    </div>
  );
};

export default ChartSection;
