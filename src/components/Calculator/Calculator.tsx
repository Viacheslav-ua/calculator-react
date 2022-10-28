import { useAppSelector } from '../../hooks/redux'
import style from './Calculator.module.css'

const Calculator: React.FC<any> = ({children}) => {

  const {calcString} = useAppSelector(state => state.calculationsSlice)

  return (
    <div className={style.container}>
      <div className={style.output}>
        <input readOnly value={calcString} className={style.input} type="text" />
      </div>
      {children}
    </div>
  )
}
 
export default Calculator