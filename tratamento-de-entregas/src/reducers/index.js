// import initialState from './initialState';

export default function mainReducer(state = [], action) {
    console.log("teste")
    switch (action.type) {

        case 'ATUALIZA-LISTA': return [
            ...state,
            ...action.lista
          ]

        default: return state;
    }
}