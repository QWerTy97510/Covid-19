import React from 'react';
import classes from './TableRow.module.css';

const TableRow = (props) => {
  return (
    <tr className={classes.TableRow}>
      <td onClick={props.clicked}>{props.country}</td>
      <td>{props.cases}</td>
      <td>{props.todayCases}</td>
      <td>{props.deaths}</td>
      <td>{props.todayDeaths}</td>
      <td>{props.recovered}</td>
      <td>{props.active}</td>
    </tr>
  );
};

export default TableRow;
