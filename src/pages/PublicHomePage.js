import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carouselImage1 from '../images/carousel-image-1.webp';
import carouselImage2 from '../images/carousel-image-2.webp';
import Modal from '../components/ModalDialog';
import '../styles/PublicHomePage.css';


const PublicHomePage = () => {
  const [ openModal, setOpenModal ] = useState(true);
  return (
    <div>
      <Carousel animation='false'>
        <Carousel.Item>
          <img src={carouselImage1} alt='Slide 1' className='homepage-img' />
          <Carousel.Caption className='caption'>
            <h3>Manage your clients</h3>
            <p>Change their subscription time, manage all the data from one place.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImage2} alt='Slide 2' className='homepage-img' />
          <Carousel.Caption className='caption'>
            <h3>Easy and flexible access to information</h3>
            <p>Friendly user interface to access easily to data.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Modal
        open={openModal}
        handleOpen={setOpenModal}
        title='Welcome!'
        message='For testing purposes you can use the followings credentials: '
      >
        <p>Username: <strong>demo</strong></p>
        <p>Password: <strong>demo123</strong></p>
        <p>Thank you.</p>
      </ Modal>
    </div>
  );
};

export default PublicHomePage;
