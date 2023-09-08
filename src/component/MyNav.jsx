import {Nav, Navbar, Row, Col, NavDropdown, Container, ListGroup, ListGroupItem} from 'react-bootstrap'
// import 'bootstrap-icons/font/bootstrap-icons.css';
import Logo from '../logo.png'


const MyNav = () => {
    return (
            <Container fluid>
              <Row className='justify-content-between align-items-center bg-dark'>
                <Col lg={6}>
                    <Nav defaultActiveKey="/home" as="ul">
                    {/* <Nav.Item as="li">
                        <div>
                            <img src={Logo} alt="Logo Netflix"/>
                        </div>
                    </Nav.Item> */}
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">TV Shows</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">Movies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">Recently Added</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">My List</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col lg={4}>
                    <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/home">Cerca</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">KIDS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">Notifiche</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#">Account</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
              </Row>
            </Container>
          );
        }


export default MyNav;