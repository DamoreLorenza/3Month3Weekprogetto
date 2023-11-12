
const initialState = {
   
   
    favourites:  [], 
    }
  
  
  const queenMusic = (
    state = initialState, 
    action 
  ) => {
   
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        
        return {
          ...state, 
          favourites: [
            ...state.favourites, 
            action.payload,
            
          ],
        }
  
      // case 'REMOVE_FROM_FAVORITE':
        
      //   return {
      //     ...state,
      //    
      //       content: state.content.filter(
      //         (el, i) => i !== action.payload
            
      //       ),
  
      //       }
      //   }
  
      default:
        return state
    }
  }
  
  export default queenMusic