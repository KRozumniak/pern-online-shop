import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star96 from '../assets/star96.png';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'IPhone 12 Pro',
    price: 999,
    rating: 5,
    img: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-12-Pro/Pacific-Blue/Apple-iPhone-12-Pro-Pacific-Blue-frontimage.png'
  };
  const description = [
    {id: 1, title: 'RAM', description: '2Gb'},
    {id: 2, title: 'Camera', description: '12pm'},
    {id: 3, title: 'CPU', description: 'i5'},
    {id: 4, title: 'Core', description: 'quad'},
    {id: 5, title: 'Battery', description: '4000'},
  ]

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column'>
            <h2>{device.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                background: `url(${star96}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 45,
                color: 'yellow'
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column justify-content-around align-content-center'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3 style={{textAlign: 'center'}}>Starting at: ${device.price}</h3>
            <Button variant={'outline-dark'}>Add to card</Button>
          </Card>
        </Col>
      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Description:</h1>
        {description.map((info, index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
              {info.title}: {info.description}
            </Row>
          )}
      </Row>
    </Container>
  );
};

export default DevicePage;
