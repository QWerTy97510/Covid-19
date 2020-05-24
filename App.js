import React from 'react';
import './App.css';
import DataSection from './containers/DataSection/DataSection';
import ChartSection from './containers/ChartSection/ChartSection';
import TableSection from './containers/TableSection/TableSection';

function App() {
  return (
    <div className='App'>
      <div className='AppLeftSide'>
        <DataSection />
      </div>
      <div className='AppRightSide'>
        <ChartSection />
        <TableSection />
      </div>
    </div>
  );
}

export default App;
