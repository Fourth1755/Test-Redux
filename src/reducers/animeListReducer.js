import { ADD_TO_LIST } from "../actions/animeListActions" 
import { DELETE_LIST } from "../actions/animeListActions"
import { SET_LIST } from "../actions/animeListActions"
//      {
//         id:'',
//         name:'',S
//         year:'',
//         image:''
//     }
const initialState=[]
export function animeListReducer(state=initialState,action){
    switch(action.type){
        case ADD_TO_LIST:
            let updatedList
            const foundItem = state.find(item=>item.id===action.payload.id)
            if(!foundItem){
                updatedList=[...state,action.payload]
            }else{
                updatedList=state.map(item=>({
                    ...item,
                    quantity:item.id=== foundItem.id ? item.quantity+1 :item.quantity
                }))
            }
            return updatedList
        case DELETE_LIST:
            return  state.filter(item=>item.id!==action.payload)
        case SET_LIST:
            //console.log("---------------------->",action.payload)
            return action.payload        
        default:
            return state
    }
    
}