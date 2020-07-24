import React,{createRef, useState, useEffect} from 'react';
import {Row, Col, Form, Container} from 'react-bootstrap';
import MyButton from '../../Button';
import { connect } from 'react-redux';
import { getCanciones, getArtista } from '../../../Actions';


const FormCanciones = (props) => {

    const [error, guardarError] = useState(false);
    const Artista = createRef();
    const Canciones = createRef();

    useEffect(()=>{

        console.log('Components listo');

    },[guardarError]);

    const handleCanciones = (e) =>{
        e.preventDefault();
        if(Artista.current.value.trim() === '' || Canciones.current.value.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        callListMusica(Artista.current.value, Canciones.current.value);
        callListArtista(Artista.current.value);
    }

    const callListMusica = async (artista, cancion) => {
        props.getCanciones(cancion, artista);
    }

    const callListArtista = async (artista) => {
        props.getArtista(artista);
    }

    return(

        <Container>
            <Row>
                <legend className="text-center">Buscador de Canciones</legend>    
            </Row>
            <Row>
                <Col xs={12}>
                    <Form>
                        <Form.Row>
                            <Col xs={6}>
                                <Form.Control
                                    className="form-control"
                                    ref={Artista} 
                                    placeholder="Artista" 
                                    name="Artistas"
                                />
                            </Col>
                            <Col xs={4}>
                                <Form.Control
                                    className="form-control"
                                    ref={Canciones} 
                                    placeholder="Cancion"
                                    name="Canciones" 
                                />
                            </Col>
                            <Col>
                                <MyButton 
                                    colors={"primary"}  
                                    size={""} 
                                    text ={"Buscar"}
                                    eventClick={handleCanciones}
                                />
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>

                    <br />
                    {error
                    ?
                        <p className="alert alert-danger text-center p-2 mb-2">Todos los campos son Obligatorios</p>
                    :
                        null                
                    }
                </Col>
            </Row>
        </Container>

    )

}



export default connect(null,{getCanciones, getArtista})(FormCanciones); 


