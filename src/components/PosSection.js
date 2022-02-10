import { Card, Row, Container, Button, Form } from 'react-bootstrap';

const PosSection = () => {
  return (
      <div style={{ marginTop: '5rem' }}>
          <Container>
              <h1 className='text-center'>POINT OF SALE</h1>
              <Row xs={1} md={2} className='g-4' style={{ marginTop: '2rem' }}>
                <Card>
                    <Card.Header className='text-center'><h6>POINT OF SALE - CASH</h6></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>PRODUCT NAME</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Please select the required product name.
                                    </Form.Text>
                                </Form.Group>
                
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: currency in Tanzanian shillings (Tzs)
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>DISCOUNT</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                </Form.Group>

                                <Button variant='primary' type='submit'>MAKE CASH SALE</Button>
                            </Form>
                              </Card.Text>
                    </Card.Body>
                </Card>
 
                <Card>
                    <Card.Header className='text-center'><h6>POINT OF SALE - CREDIT</h6></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>PRODUCT NAME</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Please select the required product name.
                                    </Form.Text>
                                </Form.Group>
                
                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>AMOUNT</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                    <Form.Text className='text-muted'>
                                        Note: currency in Tanzanian shillings (Tzs)
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>DISCOUNT</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>CUSTOMER NAME</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formBasicEmail'>
                                    <Form.Label>CUSTOMER PHONE NUMBER</Form.Label>
                                    <Form.Control type='text'></Form.Control>
                                </Form.Group>

                                <Button variant='primary' type='submit'>MAKE CREDIT SALE</Button>
                            </Form>
                              </Card.Text>
                    </Card.Body>
                </Card>

              </Row>
          </Container>
      </div>
  )
};

export default PosSection;
