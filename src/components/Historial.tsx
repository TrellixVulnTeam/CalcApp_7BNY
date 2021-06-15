import { FC } from 'react';
// import PropTypes from 'prop-types'
//import Result from './Result'

type props={
    operations:string[],
}

var i=0;
const Historial:FC<props> = ({operations}) => {

    return (
        <div className="historial">
            <h1 className="tituloHist">Historial</h1>
            <ul className="tituloHistOp">
                {
                    operations.map(function(operation){
                      // returns Nathan, then John, then Jane
                        i++;
                    return <li key={i}>{operation}</li>
                    })
                }
            </ul>
        </div>
    )
}

// Historial.propTypes = {

//     operations: PropTypes.array.isRequired

//    // mostrarResult: PropTypes.func.isRequired
// }

export default Historial
