import React from 'react';
import {Container,Row,Col,Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Menu = () =>{

    return (

        <Container>
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">        Canciones </Link></Breadcrumb.Item> 
                        <Breadcrumb.Item><Link to="/album">   Album     </Link></Breadcrumb.Item> 
                        <Breadcrumb.Item><Link to="/compras"> Compras   </Link></Breadcrumb.Item> 
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    )
}

export default Menu;