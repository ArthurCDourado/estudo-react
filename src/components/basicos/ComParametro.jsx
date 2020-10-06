import React from "react";

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <h3><strong> { props.aluno } </strong>
                 tem nota
                <strong> {props.nota} </strong>
                e foi
                <strong> { status } </strong> !
            </h3>
        </div>
    )
}
