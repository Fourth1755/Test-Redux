export const ADD_TO_LIST = 'ADD_TO_LIST'
export const DELETE_LIST = 'DELETE_LIST'
// const action={
//     type:'',
//     payload:{
//         id:'',
//         name:'',S
//         year:'',
//         image:''
//     }
// }
//Action creators
export function addToList(addedAnime){
    return{
        type:ADD_TO_LIST,
        payload:addedAnime
    }
}
export function delteList(id){
    return{
        type:DELETE_LIST,
        payload:id
    }
}