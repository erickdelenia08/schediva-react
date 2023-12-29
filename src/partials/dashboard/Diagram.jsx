import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function Diagram() {

  const chartData = {
    labels: ['Perkuliahan', 'Lainnya'],
    datasets: [
      {
        label: 'Agenda Bulan ini',
        data: [
          100, 35,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.indigo[900],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Diagram</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} height={260} />
    </div>
  );
}

export default Diagram;
