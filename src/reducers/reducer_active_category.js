//state argument is not application state 
//only the scope of the state the reducer is responsible for

export default function (state = '',  action){
    switch(action.type){
        case 'CATEGORY_SELECTED':
        return [
        {
          selected: action.selected
        }
      ]
        
        default:
        return state //return nextState
    }
    //dispatch(addTodo(text))
}

 //let nextSelected = selected(state.selected, action);
