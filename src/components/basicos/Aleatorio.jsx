import React from "react";

export default (props) => {
    const rand = parseInt(props.valorMinimo + Math.random() *
        (props.valorMaximo - props.valorMinimo));
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor aleatório: </strong>{rand}</p>
            <p><strong>Valor mínimo: </strong>{props.valorMinimo}</p>
            <p><strong>Valor máximo: </strong>{props.valorMaximo}</p>
        </div>
    )
}
