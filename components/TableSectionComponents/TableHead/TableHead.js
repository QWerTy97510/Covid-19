import React from 'react';
import classes from './TableHead.module.css';
import { useSelector } from 'react-redux';

const TableHead = (props) => {
  const tableHeads = [
    { text: 'Countries', sort: 'country' },
    { text: 'Total Cases', sort: 'cases' },
    { text: 'Today Cases', sort: 'todayCases' },
    { text: 'Total Deaths', sort: 'deaths' },
    { text: 'Today Deaths', sort: 'todayDeaths' },
    { text: 'Total Recovered', sort: 'recovered' },
    { text: 'Active Cases', sort: 'active' },
  ];

  const currentSortType = useSelector(
    (state) => state.tableSection.currentSortType
  );

  const output = tableHeads.map((tbHead) => {
    return (
      <th
        key={tbHead.sort}
        className={currentSortType === tbHead.sort ? 'active' : null}
        onClick={() => props.clicked(tbHead.sort)}>
        {tbHead.text}
      </th>
    );
  });

  return (
    <thead className={classes.TableHead}>
      <tr>{output}</tr>
    </thead>
  );
};

export default TableHead;
