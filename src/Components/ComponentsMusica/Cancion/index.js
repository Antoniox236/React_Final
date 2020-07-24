import React,{Fragment} from 'react'
import { connect } from 'react-redux';


const Cancion = (props) =>{

    if(props.letra.length === 0) return null;

    return(

        <Fragment>
            <h2>Letra de la Cancion</h2>
            <p className="letra">{props.letra}</p>
        </Fragment>

    )
}



const mapStateToProps = (state) => {
    return {
        letra: state.ListCancion
    }
}
export default connect(mapStateToProps)(Cancion); 
