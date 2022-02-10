import { Card, Row, Container, Table, ProgressBar, Button } from 'react-bootstrap';
import '../App.css'
import './HeroPage.css'

const HeroPage = () => {
  return (
    <>  
      <div style={{ marginTop: '5rem' }}>
      <Container>
      <Row xs={2} md={4} className='g-4'>
            <Card className='text-center'>
            <Card.Header>PRODUCTS</Card.Header>
              <Card.Body>
                <Card.Text>
                  <h1>43</h1>
                </Card.Text>
                <Button>View More&nbsp;<i className='fas fa-angle-right'></i></Button>
              </Card.Body>
            </Card>

            <Card className='text-center'>
            <Card.Header>SALES</Card.Header>
              <Card.Body>
                <Card.Text>
                  <h1>43</h1>
                </Card.Text>
                <Button>View More&nbsp;<i className='fas fa-angle-right'></i></Button>
              </Card.Body>
            </Card>

            <Card className='text-center'>
            <Card.Header>PURCHASES</Card.Header>
              <Card.Body>
                <Card.Text>
                  <h1>43</h1>
                </Card.Text>
                <Button>View More&nbsp;<i className='fas fa-angle-right'></i></Button>
              </Card.Body>
            </Card>

            <Card className='text-center'>
            <Card.Header>EXPENSES</Card.Header>
              <Card.Body>
                <Card.Text>
                  <h1>43</h1>
                </Card.Text>
                <Button>View More&nbsp;<i className='fas fa-angle-right'></i></Button>
              </Card.Body>
            </Card>
      </Row>

      <div style={{ marginTop: '5rem' }}></div>
      <Row xs={1} md={2} className='g-4'>
            <Card>
            <Card.Header className='text-center'>MOST SOLD PRODUCTS</Card.Header>
              <Card.Body>
                <div>HP laptops &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='success' now={100}></ProgressBar>
                <br></br>
                <div>Hard drives &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='success' now={100}></ProgressBar>
                <br></br>
                <div>Game Controllers &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='success' now={90}></ProgressBar>
                <br></br>
                <div>Mouse Controllers &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='success' now={80}></ProgressBar>
              </Card.Body>
            </Card>

            <Card>
            <Card.Header className='text-center'>LEAST SOLD PRODUCTS</Card.Header>
              <Card.Body>
              <div>Notebooks &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='danger' now={100}></ProgressBar>
                <br></br>
                <div>Counter Books &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='danger' now={95}></ProgressBar>
                <br></br>
                <div>Printer Hp &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='danger' now={90}></ProgressBar>
                <br></br>
                <div>Flash drives &nbsp;&nbsp;||&nbsp;&nbsp;20 of 20 items</div>
                <ProgressBar variant='danger' now={80}></ProgressBar>
              </Card.Body>
            </Card>
    
      </Row>


    <div style={{ marginTop: '4rem' }}>
    <Table striped bordered hover style={{ marginTop: '5rem' }}>
      <thead>
        <th>#</th>
        <th>Name</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Jane Doe</td>
          <td>Check</td>
        </tr>

        <tr>
          <td>2</td>
          <td>John Doe</td>
          <td>Check</td>
        </tr>

        <tr>
          <td>3</td>
          <td>Hugo Doe</td>
          <td>Check</td>
        </tr>
      </tbody>
    </Table>
    </div>


      </Container>
      </div>
    </>
  )
};

export default HeroPage;
