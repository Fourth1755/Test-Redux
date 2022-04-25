export const ADD_TO_LIST = 'ADD_TO_LIST'
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