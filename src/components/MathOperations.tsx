import {FC} from 'react'
import Button,{ButtonClickHandler} from './Button/Button'

const array=["+","-","*","/"]

const renderFunction = (onClickOperation:ButtonClickHandler) => {
    const funcion = (item:string) =>(<Button key={item} text = {item} clickHandler = {onClickOperation}></Button>)
    return array.map(funcion)
}

type Props={
    onClickOperation:ButtonClickHandler,
    onClickEqual:ButtonClickHandler
}

const MathOperations:FC<Props> = ({onClickOperation,onClickEqual}) =>(
    <section className="math-operations">
        {
            renderFunction(onClickOperation)
        }
        <Button text ="=" clickHandler = {onClickEqual}></Button>
        </section>
)


export default MathOperations