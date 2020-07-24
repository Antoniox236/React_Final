import React,{Fragment} from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import MyButton from '../../Button';


class FormAlbum extends React.Component {

    render(){

        return(

            <Fragment>
                <Row>
                    <legend className="text-center">Buscador de Album</legend>    
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form>
                            <Form.Row>
                                <Col xs={9}>
                                    <Form.Control
                                        className="form-control"
                                        placeholder="Artista" 
                                        name="Artistas"
                                        onChange={this.props.onChange}
                                    />
                                </Col>
                                <Col>
                                    <MyButton
                                        
                                        color ={"outline-secondary"}
                                        text  ={"Buscar"}
                                        size = {""}
                                        eventClick ={this.props.search}

                                    >
                                    </MyButton>
    
                                    {/* <Button variant="outline-secondary" onClick={this.props.search}>Buscar</Button> */}

                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default FormAlbum;