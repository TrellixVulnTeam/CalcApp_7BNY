import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const array=["+","-","*","/"]

const renderFunction = onClickOperation => {
    const funcion = item =>(<Button key={item} text = {item} clickHandler = {onClickOperation}></Button>)
    return array.map(funcion)
}

const MathOperations = ({onClickOperation,onClickEqual}) =>(
    <section className="math-operations">
        {
            renderFunction(onClickOperation)
        }
        <Button text ="=" clickHandler = {onClickEqual}></Button>
        </section>
)

MathOperations.propTypes ={
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations