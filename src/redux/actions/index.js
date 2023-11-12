export const ADD_TO_FAVORITE='ADD_TO_FAVORITE'
export const REMOVE_FROM_FAVORITE='REMOVE_FROM_FAVORITE'
export const GET_PLAY='GET_PLAY'




const baseEndpoint = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen';

export const addToFavoriteAction=(album)=>{
 
return{
    type: ADD_TO_FAVORITE,
    payload: album
}
}

// export const removeFromFavoriteAction=(i)=>{
//     return{
//         type: REMOVE_FROM_FAVORITE,
//         payload: i
//     }
// }

export const getPlayAction=(title)=>{


    return async (dispatch)=>{
        try {
          const response = await fetch(baseEndpoint);
          if (response.ok) {
            const { data } = await response.json();
            dispatch({
                type: GET_PLAY,
                payload: data
            })
          } else {
            alert("Error fetching results");
          }
        } catch (error) {
          console.log(error);
        }
      }

}