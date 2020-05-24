import React from 'react';
import classes from './DataSection.module.css';
import HeaderTitle from '../../components/UIComponents/HeaderTitle/HeaderTitle';
import SearchBar from '../../components/UIComponents/SearchBar/SearchBar';
import DataComponents from '../../components/DataSectionComponents/DataComponents/DataComponents';

const DataSection = () => {
  return (
    <div className={classes.DataSection}>
      <HeaderTitle />
      <SearchBar />
      <DataComponents />
    </div>
  );
};

export default DataSection;
