import './index.scss'

export default function (props) {

  const { isInputShow } = props

  return (
      <>
        {
          isInputShow
          ?
          (
            <div className="input-wrapper">
              <input type="text" placeholder="请输入待办事项"/>
              <button className="btn btn-primary">增加</button>
            </div>
          )
          :
          ''
        }
      </>
  )
}
