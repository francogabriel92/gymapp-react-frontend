import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

const SearchFilter = ({ filter, currentPage }) => {
  const [ toSearch, setToSearch ] = useState('');
  const handleChange = e =>{
    setToSearch(e.target.value);
    filter(e.target.value);
    currentPage(1);
  };

  
  return (
    <div>
      <Form>
        <Form.Row className='m-0'>
          <Col>
            <Form.Control onChange={handleChange} value={toSearch || ''} type='text' placeholder='Enter client to search...' />
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default SearchFilter;
