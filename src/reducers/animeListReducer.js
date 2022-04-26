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
export function animeListReducer(state=initialState,action){
    switch(action.type){
        case ADD_TO_LIST:
            let updatedList
            const foundItem = state.animeList.find(item=>item.id===action.payload.id)
            if(!foundItem){
                updatedList=[...state.animeList,action.payload]
            }else{
                updatedList=state.animeList.map(item=>({
                    ...item,
                    quantity:item.id=== foundItem.id ? item.quantity+1 :item.quantity
                }))
            }
            return{
                ...state,
                animeList:updatedList
            }
        default:
            return state
    }
    
}