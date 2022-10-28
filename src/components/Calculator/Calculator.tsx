import style from './Calculator.module.css'

const Calculator: React.FC<any> = ({children}) => {

  return (
    <div className={style.container}>
      {children}
    </div>
  )
}
 
export default Calculator