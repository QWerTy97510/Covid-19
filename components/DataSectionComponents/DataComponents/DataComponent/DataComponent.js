import React from 'react';
import classes from './DataComponent.module.css';

const DataComponent = (props) => {
  return (
    <div className={classes.DataComponent}>
      <p className={classes.DataComponentLeft}>{props.leftParagraph}</p>
      <p className={classes.DataComponentRight}>{props.rightParagraph}</p>
    </div>
  );
};

export default DataComponent;
