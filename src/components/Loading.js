import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div className='text-center'>
      <h4>
        Loading...
      </h4>
      <Spinner className='m-3' animation="border" role="status" />
    </div>
  ) 
};

export default Loading;
