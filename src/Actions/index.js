import axios from 'axios'



export const getCanciones = (cancion,artista) => {

    return async (dispatch, getState) => {
        try{
            const respose = await axios.get(`https://api.lyrics.ovh/v1/${artista}/${cancion}`);
            dispatch({
                type: 'NEW_CANCION_LIST',
                payload: respose.data.lyrics
            })
        }
        catch{
            dispatch({
                type: 'ERROR'
            })
        }
    }
}

export const getArtista = (artista) => {
    return async (dispatch, getState) => {
        try{
            const respose = await axios.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`);
            dispatch({
                type: 'NEW_ARTISTA_LIST',
                payload: respose.data.artists[0]
            })
        }
        catch{
            dispatch({
                type: 'ERROR'
            })
        }
    }
}

//carrito de compras

export const createAlbum = (banda,artista,costo) => {
    //Action
    return (dispatch, getState) =>{
        try{
            dispatch({
                type: 'CREATE_ALBUM',
                payload: {
                    banda: banda,
                    artista: artista,
                    costo:costo
                }
            })
        }
        catch{
            dispatch({
                type: 'ERROR'
            })
        }

    }
}