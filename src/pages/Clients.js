import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container,
  Button } from 'react-bootstrap';
import ClientList from '../components/ClientList';
import ClientForm from '../components/ClientForm';
import Pagination from '../components/Pagination';
import SearchFilter from '../components/SearchFilter';
import clientService from '../services/client';

const Client = ({ user }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ openForm, setOpenForm ] = useState(false);
  const [ filter, setFilter ] = useState('')
  const [ clientList, setClientList ] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ totalClients, setTotalClients ] = useState(0);
  const clientsPerPage = 4;
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const paginate = pageNum => setCurrentPage(pageNum);
  let currentClients;
  let prevFilter = filter;

  const filterChanged = (filter) => filter === prevFilter ? false : true;

  useEffect(()=> {
    const getClients = async () => {
      try{
        setIsLoading(true);
        const response = await clientService.get(user.token);
        if (response.status === 200) {
          setIsLoading(false);
          setClientList(response.data)
          setTotalClients(response.data.length);
        };
      }
      catch {
        return(<Link to='/' />)
      }
    };
    getClients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  currentClients = clientList.slice(indexOfFirstClient, indexOfLastClient);

  if(filter !== '' && filterChanged(filter)){
    currentClients = clientList.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    setTotalClients(currentClients.length);
  }




  return (
    <div>
      <Container className='align-items-center'>
        <h3 className='text-center m-4'>Clients</h3>
        <SearchFilter  filter={setFilter}/>
        <ClientList 
          clients= {currentClients}
          isLoading={isLoading}
        />
        <Pagination
          itemPerPage={clientsPerPage}
          totalItems={totalClients}
          paginate={paginate}
        />
        
        {
          openForm 
           ? <ClientForm 
              user={user} 
              clientList= {clientList}
              clientListHandler={setClientList} 
              formHandler={setOpenForm}
            />
           : <Button onClick={() => { setOpenForm(true) }}>Add Client</Button>
        }
      </Container>
    </div>
  );
}

export default Client;