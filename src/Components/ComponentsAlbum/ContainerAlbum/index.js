import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import FormAlbum from '../FormAlbum';
import Album from '../Album';
import busqueda from '../../../Api/Album'

class ContainerAlbum extends React.Component {


    constructor(){
        super();
        this.state={
            albumText: '',
            listAlbum:[]
        }
    
        this.onChangeSearch = this.onChangeSearch.bind(this)
        this.search = this.search.bind(this)    
    }
    
    
    onChangeSearch(e){
        e.preventDefault()
        this.setState({albumText: e.target.value})
    }

    async search(){
        const response = await busqueda.get(`searchalbum.php?a=${this.state.albumText}`)
        this.setState({listAlbum: response.data.album})
     }

    
    render(){

        return(

            <Container>
                <Row>
                    <Col xs={12}>
                        
                        <FormAlbum 
                            onChange ={this.onChangeSearch}
                            search ={this.search}
                        />

                    </Col>
                </Row>
                <Row>
                     <br/>
                    {this.state.listAlbum >= 0
                    
                    ?
                        <Col sm={12}>
                            <br />
                            <p className="alert alert-danger text-center p-2 mb-2">No hay datos que mostrar</p>
                        </Col>
                    :
                        this.state.listAlbum.map((album) =>{
                            return(
                                <Col sm={4}>
                                    <Album 
                                        key={album.idArtist}
                                        name ={album.strAlbumStripped}
                                        artista={album.strArtist}
                                        anno ={album.intYearReleased}
                                        genero ={album.strGenre}
                                        img ={album.strAlbumThumb}
                                        costo={album.idAlbum}
                                    /><br />
                                </Col>                            
                            )
                        })

                    }

                </Row>
            </Container>
        )
    }
}
export default ContainerAlbum;

 