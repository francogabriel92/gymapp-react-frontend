import React from 'react';

const Pagination = ({ itemPerPage, totalItems, paginate }) => {

  const pageNumbers = [];

  for ( let number = 1; number <= Math.ceil(totalItems/itemPerPage); number++) {
    pageNumbers.push(number);
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <a className='page-link' href='#/'>Previous</a>
        </li>
          { pageNumbers.map(num => (
              <li className='page-item' key={num}>
                <a className='page-link' href='#/' onClick={() => paginate(num)}>{num}</a>
              </li>
            ))
          }
        <li className='page-item'>
          <a className='page-link' href='#/'>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;
