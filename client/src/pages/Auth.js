import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";

const Auth = () => {
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      history.push(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            <Button className={'mt-3'} variant={'outline-success'} onClick={click}>
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;