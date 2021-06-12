import React, { useState, useEffect, useMemo } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import ClientList from '../components/ClientList';
import Pagination from '../components/Pagination';
import SearchFilter from '../components/SearchFilter';
import clientService from '../services/client';
import ClientCard from '../components/ClientCard';

const Client = ({ user, userHandler }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ filter, setFilter ] = useState('');
  const [ clientList, setClientList ] = useState([]);
  const [ currentPage, setCurrentPage] = useState(1);
  const [ totalClients, setTotalClients ] = useState(0);
  const [ redirect, setRedirect ] = useState(false);
  const [ currentClient, setCurrentClient ] = useState(undefined);
  const CLIENTS_PER_PAGE = 4;

  const paginate = pageNum => setCurrentPage(pageNum);  // CHANGES CURRENT PAGE ON PAGINATION

  // GET CLIENTS FROM DB
  useEffect(()=> {
    const getClients = async () => {
      try{
        setIsLoading(true);
        const response = await clientService.get(user.token);
        if (response.status === 200) {
          setIsLoading(false);
          setClientList(response.data)
          setTotalClients(response.data.length);
        }
      }
      catch (error) {
        userHandler(null);
        setRedirect(true);
      }
    };
    getClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  if (redirect) {
    return <Redirect to='/login' /> 
  };
  
  return (
    <div>
      <Container className='align-items-center'>
        <h3 className='text-center m-4'>Clients</h3>
        <SearchFilter  filter={setFilter} currentPage={setCurrentPage}/>
        <ClientList 
          clients= {currentClients}
          isLoading={isLoading}
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
          <Button>Add client</Button>
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