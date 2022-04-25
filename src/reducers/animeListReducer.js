import { ADD_TO_LIST } from "../actions/animeListActions" 
//      {
//         id:'',
//         name:'',S
//         year:'',
//         image:''
//     }
const initialState={
    animeList:[]
}
export function addToList(state=initialState,action){
    switch(action.type){
        case ADD_TO_LIST:
            const updatedState=[...state.animeList,action.payload]
            return{
                animeList:updatedState
            }
        default:
            break;
    }
    
}