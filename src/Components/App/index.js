import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from '../Menu';
import ContainerMusica from '../ComponentsMusica/ContainerMusica';
import ContainerAlbum from '../ComponentsAlbum/ContainerAlbum';
import ContainerCarrito from '../ComponentsCarrito/ContainerCarrito';
import FooterPage from '../Footer';

const App = () =>{

    return(

        <Container>
            <BrowserRouter>
                <Row>
                    <Menu/>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Route path="/" exact component={ContainerMusica}></Route>
                        <Route path="/album" exact component={ContainerAlbum}></Route>
                        <Route path="/compras" exact component={ContainerCarrito}></Route>
                    </Col>
                 </Row>
                 <Row>
                    <Col  xs={12}>
                        <FooterPage />   
                    </Col>
                 </Row>
            </BrowserRouter>
        </Container>
    )

}



export default App;


