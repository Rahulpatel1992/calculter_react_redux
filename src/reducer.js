const initialState = {
    num1 : '',
    num2 :'',
    result:''
}

 const reducer =  (state = initialState ,action) => {
   const newState = {...state}
    switch( action.type){
        case 'add1':
        newState.num1 = action.val1;
        console.log(newState.num1)
        break;

        case 'add2' :
        newState.num2 = action.val2;
        console.log(newState.num2)
        break;

        case 'submitHandle':
         newState.result = parseInt(newState.num1) + parseInt(newState.num2);
         console.log(newState.result);
        break;

        case 'submitMinus':
        newState.result = parseInt(newState.num1) - parseInt(newState.num2);
        console.log(newState.result);
       break;


       case 'submitMultiply':
       newState.result = parseInt(newState.num1) * parseInt(newState.num2);
       console.log(newState.result);
      break;

      case 'submitDivied':
      newState.result = parseInt(newState.num1) / parseInt(newState.num2);
      console.log(newState.result);
     break;

        default: return newState;
    }

    return newState;
    
 }

 export default reducer;