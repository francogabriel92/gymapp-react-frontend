import React, { useEffect, useState } from 'react';
import { Card, Modal, Col, Container, Row } from 'react-bootstrap';
import ClientCard from '../components/ClientCard';
import Widget from '../components/Widget';
import utils from '../utils/utils';
import '../styles/modalClientCard.css'

const Dashboard = ({ clientList, setClientList, user }) => {
  const [ stats, setStats ] = useState({});
  const [ open, setOpen ] = useState(false);
  const [ selectedClient, setSelectedClient ] = useState(null);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    setStats(utils.getStats(clientList));
  }, [clientList])
  return (
    <div className='text-center mt-2'>
      <h2>Dashboard</h2>
      <Container className='mt-4'>
        <Row>
          <Col>
            <Widget
              title='Total Clients'
            >
              <Card.Text className='h1'>
                {clientList.length}
              </Card.Text>
              <Card.Text>
                <span className='text-success'>Subscribed</span> : {stats.subClients}
              </Card.Text>
              <Card.Text>
                <span className='text-danger'>Unsubscribeds</span> : {stats.unsubClients}
              </Card.Text>
            </Widget>
          </Col>
          <Col>
            <Widget title='Close to Expire'>
              { clientList.length > 0 && stats.closeToExpire
                ? stats.closeToExpire.map( c => {
                  c.subEndDate = new Date(c.subEndDate);
                  return <Card.Text 
                    key={c.id}
                    onClick={() => {
                    handleOpen()
                    setSelectedClient(c)
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    {c.name} - {c.subEndDate.toLocaleDateString()}
                  </Card.Text>
                })
                : null
              }
            </Widget>
          </Col>
        </Row>
      </Container>
      <Modal 
        show={open}
        onHide={handleOpen}
        animation={false}
        >
        <Modal.Body style={{ background: '#343a40'}} >
          <ClientCard
            dashboard
            client={selectedClient}
            token={ user ? user.token : null}
            listHandler={setClientList}
            list={clientList}
            currentClientHandler={setSelectedClient}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Dashboard;