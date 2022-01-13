import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";

const Auth = () => {
  return (
    <Container
      className='d-flex justify-content-center align-content-center'
      style={{position: 'relative', top: '25vh'}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>Authorization</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Email'
          />
          <Form.Control
            className='mt-3'
            placeholder='Password'
            type='password'
          />
          <Button className={'mt-3'} variant={'outline-success'}>
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;