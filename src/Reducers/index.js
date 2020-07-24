import { combineReducers } from "redux"


const letrasList = (list = [], action) => {
    switch(action.type){
        case "NEW_CANCION_LIST":
            return action.payload
        default:
            return list
    }
}

const infoList = (list = [], action) => {
    switch(action.type){
        case "NEW_ARTISTA_LIST":
            return action.payload
        default:
            return list
    }
}

const listaAlbum = (list = [], action) => {

    let listCopy = list
    switch(action.type){
        case "CREATE_ALBUM":
            listCopy.push(action.payload)
            return listCopy        
        default:
            return list
    }
}


export default combineReducers({
    ListArtista: infoList,
    ListCancion: letrasList,
    ListaAlbum: listaAlbum
})