import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { style } from './Loader.css';

const Loader = () => {
  return (
    <div className="example">
      <CircularProgress />
    </div>
  );
};

export default Loader;
