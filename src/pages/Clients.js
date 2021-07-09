import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import ClientList from '../components/ClientList';
import Pagination from '../components/Pagination';
import SearchFilter from '../components/SearchFilter';
import ClientCard from '../components/ClientCard';

const Client = ({ user, userHandler, clientList, setClientList }) => {
  const [ filter, setFilter ] = useState('');
  const [ currentPage, setCurrentPage] = useState(1);
  const [ totalClients, setTotalClients ] = useState(0);
  const [ currentClient, setCurrentClient ] = useState(undefined);
  const CLIENTS_PER_PAGE = 4;

  const paginate = pageNum => setCurrentPage(pageNum);  // CHANGES CURRENT PAGE ON PAGINATION

  // GET CLIENTS LENGHT FROM ARRAY
  useEffect(()=> {
    setTotalClients(clientList.length);
  }, [clientList]);

  // FILTER & PAGINATION CLIENT'S ARRAY TREATMENT
  const currentClients = useMemo( () => {
    let processedClients = clientList;
    if(filter){
      processedClients = clientList.filter( c => c.name.toLowerCase().includes(filter.toLowerCase() ));
    };
    setTotalClients(processedClients.length);
    return processedClients.slice(
      (currentPage - 1) * CLIENTS_PER_PAGE,
      (currentPage - 1) * CLIENTS_PER_PAGE + CLIENTS_PER_PAGE
    );
  }, [ clientList, currentPage, filter ]);
  
  return (
    <div>
      <Container className='align-items-center'>
        <h3 className='text-center m-4'>Clients</h3>
        <SearchFilter  filter={setFilter} currentPage={setCurrentPage}/>
        <ClientList 
          clients= {currentClients}
          token={ user ? user.token : null}
          listHandler={setClientList}
          list={clientList}
          currentClientHandler={setCurrentClient}
        />
        <Pagination
          itemPerPage={CLIENTS_PER_PAGE}
          totalItems={totalClients}
          currentPage={currentPage}
          paginate={paginate}
        /> 
        <Link to='/addclient'>
          <Button className='text-center' variant='dark'>Add client</Button>
        </Link>
        {
          currentClient
            ? <ClientCard
                client={currentClient}
                token={ user ? user.token : null}
                listHandler={setClientList}
                list={clientList}
                currentClientHandler={setCurrentClient}
              />
            : null
        }
      </Container>
    </div>
  );
}

export default Client;