import React, { useReducer } from "react";
import PersnolDetails from "./PersonalDetails";
import AccountDetails from "./AccountDetails";
import Review from "./Review";
const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  isSubmitted: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
      case "NEXT_STEP":
        return{...state,step:state.step+1}
       case "PREVIOUS_STEP":
        return{...state,step:state.step-1} 
       case "SUBMIT_FORM":
        return{...state,isSubmitted:true} 
       case "RESET_FORM":
        return initialState;
        default :
        return state; 
  }
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return(
    <div style={{width:"300px",margin:"40px auto"}}>
<h2>Registration Form</h2>
{state.isSubmitted?(
  <>
  <h3>Form submitted successfully</h3>
  <button onClick={()=> dispatch({type:"RESET_FORM"})}>
    Reset Form
  </button>
  </> 
) :(
  <>
  {state.step===1 &&(
    <PersnolDetails state={state} dispatch={dispatch}/>

  )}
  {state.step===2 && (
    <AccountDetails state={state} dispatch={dispatch}/>
  )}
  {state.step===3 && (
    <Review state={state} dispatch={dispatch}/>
  )}
  </>
)}
    </div>
  )
}
export default App;
