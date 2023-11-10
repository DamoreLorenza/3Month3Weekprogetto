const initialState={
    stock: []
}

const playReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'GET_PLAY':
        
        return {
          ...state, 
          stock: action.payload,
            
          }
    
      
        default : return state

    } }

export default playReducer