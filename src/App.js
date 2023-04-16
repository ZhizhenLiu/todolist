import Header from './component/Header/index'
import AddInput from "./component/AddInput";
import {useCallback, useState} from "react";

function App() {
  const [isInputShow, setIsInputShow] = useState(false)
  const [todoList, setTodoList] = useState([])

  const addItem = useCallback((value) => {
    const listItem = {
      id: new Date().getTime(),
      content: value,
      completed: false,
    }
    setTodoList(todoList => [...todoList, listItem])
    setIsInputShow(false)
  }, [])

  return (
    <div className="App">
      <Header openInput={() => setIsInputShow(!isInputShow)}></Header>
      <AddInput isInputShow={isInputShow} addItem={addItem}></AddInput>
    </div>
  );
}

export default App;
