import React from 'react';
import './ProfileSection.css'
import { Container } from 'semantic-ui-react'
import { Button, Card, Form } from 'react-bootstrap';

const ProfileSection = () => {
  return (
      <div style={{ marginTop: '5rem' }}>
        <Container>
          <Card>
            <Card.Header className='text-center'><h2>Profile Info</h2></Card.Header>
            <Card.Body>
              <Form>
                
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email'></Form.Control>
                  <Form.Text className='text-muted'>
                    Do not share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type='text'></Form.Control>
                  <Form.Text className='text-muted'>
                    Ten digits required (Example: 0768693933).
                  </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password'></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type='password'></Form.Control>
                </Form.Group>
                <Button variant='primary' type='submit'>Update</Button>

              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
  )
};

export default ProfileSection;
