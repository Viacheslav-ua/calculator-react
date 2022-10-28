import keyboard from "../../keyboard.json"
const Calc: React.FC = () => {

  console.log(keyboard);
  

  return (
    <>
      <div className="container">
        <div className="output">
          <input type="text" />
        </div>
        <div className="buttons">
          {keyboard.valueKeys.map((item: any) => {
            return <button>{item.val}</button>
          })}
        </div>

      </div>
    </>
  )
}
 
export default Calc