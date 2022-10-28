import style from './KeyBoard.module.css'
import keyboard from '../../keyboard.json'
import { calculationsSlice } from '../../store/reducers/CalculationsSlice'
import { useAppDispatch } from '../../hooks/redux'

const KeyBoard: React.FC = () => {

  const {inputValue, operations} = calculationsSlice.actions
  const dispatch = useAppDispatch()


  return (
    <>
    <div>
    {keyboard.operationKeys.map((item: any, index: number) => {
      return <button 
      key={index}
      onClick={() => dispatch(operations(item.val))} 
      className={style.button}>
        {item.val}
      </button>
    })}
  </div>
    <div>
      {keyboard.valueKeys.map((item: any, index: number) => {
        return <button
        key={index} 
        onClick={() => dispatch(inputValue(item.val))} 
        className={style.button}>
          {item.val}
        </button>
      })}
    </div>
    
  </>
  )
}
 
export default KeyBoard