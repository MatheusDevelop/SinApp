
const initialState = {
    stateOfApp:1,
    textOld:"",
    word:
    [
        {
            verbo:'',
            sinonimos:[]
        }
    ]
    
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET-TEXT-OLD':
            return{...state,textOld:action.payload.text}            
        case 'SET-STATE':
            return{...state,stateOfApp:action.payload.stateToSet}
        case 'REQUEST':
            return{...state,word:action.payload.data}         
        default:
            return state;
    }
};