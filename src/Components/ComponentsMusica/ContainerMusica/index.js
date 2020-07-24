import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormCanciones from '../FormCanciones';
import Artista from '../Artista';
import Cancion from  '../Cancion';
import '../Style/style.css'


const ContainerMusica = () =>{

    return (

        <Container>
            <Row>
                <FormCanciones />
            </Row>
            <Row>
                <Col md={6}>
                    <Artista />
                </Col>
                <Col md={6}>
                    <Cancion />
                </Col>
            </Row>
        </Container>
    )

}

export default ContainerMusica; 