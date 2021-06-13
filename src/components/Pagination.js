import React, { useEffect, useMemo, useState } from 'react';
import '../styles/pagination.css';

const Pagination = ({ itemPerPage = 10, totalItems = 0, currentPage, paginate }) => {
  const [ totalPages, setTotalPages ] = useState(0);
  
  useEffect(() => {
    if(totalItems > 0 && itemPerPage > 0){
      setTotalPages(Math.ceil(totalItems / itemPerPage));
    }
  },[ totalItems, itemPerPage ]);

  const paginationItems = useMemo( () => {
    const pageNumbers = [];
    for( let i = 1; i <= totalPages; i++ ){
      pageNumbers.push(
        <li className='page-item text-dark' key={i}>
          <a className='page-link' href='#/' onClick={() => paginate(i)}>{i}</a>
        </li>);
    }
    return pageNumbers;
  }, [ totalPages, paginate]);

  if(totalPages === 0) return null;

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className='page-item' onClick={() => currentPage !== 1 ? paginate(currentPage-1) : null}>
          <a className='page-link' href='#/'>Previous</a>
        </li>
          { paginationItems }
        <li className='page-item' onClick={() => currentPage !== totalPages ? paginate(currentPage+1) : null}>
          <a className='page-link' href='#/'>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;
