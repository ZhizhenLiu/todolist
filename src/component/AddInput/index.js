import './index.scss'
import {useRef} from "react";

export default function AddInput(props) {

  const { isInputShow, addItem } = props
  const inputRef = useRef(null);

  function submit() {
    const value = inputRef.current.value.trim();
    if (value.length === 0) {
      return;
    }
    addItem(value)
    inputRef.current.value = ''
  }

  return (
      <>
        {
          isInputShow
          ?
          (
            <div className="input-wrapper">
              <input type="text" ref={inputRef} placeholder="请输入待办事项"/>
              <button className="btn btn-primary" onClick={submit}>增加</button>
            </div>
          )
          :
          ''
        }
      </>
  )
}
