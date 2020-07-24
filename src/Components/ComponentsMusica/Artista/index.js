import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {Card } from 'react-bootstrap';


const Artista = (props) =>{

    if(props.artista.length === 0) return null;

    return(

        <Fragment>
            <Card md={12}>
            <Card.Body>
                <Card.Title className="card-text">Información de Artista</Card.Title>
                <Card.Img variant="top" src={props.artista.strArtistThumb} alt="Logo Artista"/>
                <Card.Text>
                    <p className="card-text">Género: {props.artista.strGenre} </p>
                    <h2>Biografía</h2>
                    <p  className="card-text">{props.artista.strBiographyES} </p>
                </Card.Text>
            </Card.Body>
            </Card>
        </Fragment>

    )
}


const mapStateToProps = (state) => {
    return {
        artista: state.ListArtista
        //artista: state.ListCancion
    }
}

export default connect(mapStateToProps)(Artista); 
