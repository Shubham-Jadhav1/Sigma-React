
import './App.css'
import Title from "./Title.jsx"


function Des() {
  return <h3>I am Description</h3>
}
function App() {
  
  return (
  <div>
    {/* <h1>This is my app component</h1>
    <p>inside app component we have: </p> */}
  <Title />
  <Des />
  <Title />
  <Des />
  </div>
  );
}

export default App

