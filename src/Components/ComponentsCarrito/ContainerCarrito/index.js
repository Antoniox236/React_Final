import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import Carrito from '../CarritoList';

const ContainerCarrito = () => {

    return (

        <Fragment>
            <Row>
                <Col>
    
                    <Carrito />

                </Col>
            </Row>
        </Fragment>


    )

}
export default ContainerCarrito;