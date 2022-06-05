import './auth.css'
import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function Auth() {
  return (

    <Container style={{ height: "80vh" }}>
      <div className='wrapper-auth py-5'>
        <Row className=''>
          <Col className='pt-5'>
            <div className='content-auth'>
              <h1>Welcome To My Apps</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corrupti eveniet at laudantium officia assumenda incidunt repellendus, hic iusto ullam.</p>
            </div>

          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>

  )
}

export default Auth
