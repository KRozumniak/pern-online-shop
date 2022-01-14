import React from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className='d-flex justify-content-center align-content-center'
      style={{position: 'relative', top: '25vh'}}
    >
      <Card style={{width: 600}} className='p-5'>
        <h2 className='m-auto'>{isLogin ? 'Login' : 'Registration'}</h2>
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
          <Row className='d-flex justify-content-between'>
            {isLogin ?
              <div>
              Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
            </div>
              :
              <div>
                Have an account? <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            }
              <Button className={'mt-3'} variant={'outline-success'}>
                {isLogin ? 'Login' : 'Register'}
              </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;