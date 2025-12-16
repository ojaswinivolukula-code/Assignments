import MessageCard from "./MessageCard.jsx";
function App(){
  return(
    <div>
      <MessageCard
      title="Welcome"
      message="Welcome to react training"/>
      <MessageCard
      title="Remainder"
      message="Practice react daily"/>
      <MessageCard
      title="Success"
      message="You are doing great"/>
      <MessageCard
      title="Tip"
      message="Understand props and states clearly"/>
    </div>
  )
}

export default App
