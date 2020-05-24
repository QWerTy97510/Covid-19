import React from 'react';
import classes from './TableBody.module.css';
import TableRow from './TableRow/TableRow';

const TableBody = (props) => {
  let output = null;
  if (!props.loading) {
    output = props.data.map((element) => {
      return (
        <TableRow
          key={element.country}
          country={element.country}
          clicked={() => props.clicked(element.country)}
          cases={element.cases}
          todayCases={element.todayCases}
          deaths={element.deaths}
          todayDeaths={element.todayDeaths}
          recovered={element.recovered}
          active={element.active}
        />
      );
    });
  }

  return <tbody className={classes.TableBody}>{output}</tbody>;
};

export default TableBody;
