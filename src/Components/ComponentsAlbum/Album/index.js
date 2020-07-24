import React,{Fragment} from 'react';
import {Card} from 'react-bootstrap';
import logo from '../logo.jpg';
import MyButton from '../../Button';

import {connect} from 'react-redux'
import {createAlbum} from '../../../Actions'


class Album extends React.Component {

    constructor (){
        super();
        this.state ={
            Album: []
        }
        this.handleCarrito = this.handleCarrito.bind(this);
    }

    handleCarrito = (banda,artista,costo) =>{     
        let newAlbum ={
              banda: banda,
              artista: artista,
              costo: costo
          }
        let copy =[...this.state.Album, newAlbum];
        this.setState({Album: copy});
        localStorage.setItem('Album', JSON.stringify(this.state.Album));
        createAlbum(banda,artista,costo);
    }


    render(){

        return(

            <Fragment>
                <br />
                <Card className="card-dimencion" >
                    <Card.Img variant="top" src={(this.props.img >=0?logo:this.props.img)} className="img-dim" />
                    <Card.Body> 
                    <Card.Title>
                        <strong>Banda Musical: {this.props.name}    </strong><br/>
                        <strong>Genero:        {this.props.genero}  </strong><br/>   
                        <strong>Lanzamiento:   {this.props.anno}    </strong><br/>
                        <strong>Artista:       {this.props.artista} </strong><br/>
                        <strong>Costo: $       {this.props.costo} </strong><br/>
                    </Card.Title>
                    <Card.Text>
                        <MyButton
                            eventClick={()=>{this.handleCarrito(this.props.name,this.props.artista,this.props.costo)}} 
                            text = {"Comprar"}
                        />
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Fragment>
        )

    }

}

//export default Album;
export default connect(null, {createAlbum})(Album)