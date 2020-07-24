import React, { Fragment,useState } from 'react';
import {Table} from 'react-bootstrap';
//import { connect } from 'react-redux';

const Carrito = () =>{


    return(

        <Fragment>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Banda</th>
                        <th>Artista</th>
                        <th>Costo</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{(localStorage.getItem('Album'))}</th>
                        <th>Artista</th>
                        <th>Costo</th>
                        <th>Total</th>
                    </tr>                
                </tbody>
            </Table>

        </Fragment>

    )

}


export default Carrito;

// const mapStateToProps = (state) => {
//     return {
//         letra: state.ListaAlbum
//     }
// }
// export default connect(mapStateToProps)(Carrito); 