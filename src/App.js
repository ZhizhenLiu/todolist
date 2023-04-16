import Header from './component/Header/index'
import AddInput from "./component/AddInput";
import {useState} from "react";
function App() {
  const [isInputShow, setIsInputShow] = useState(false)

  return (
    <div className="App">
      <Header openInput={() => setIsInputShow(!isInputShow)}></Header>
      <AddInput isInputShow={isInputShow}></AddInput>
    </div>
  );
}

export default App;
