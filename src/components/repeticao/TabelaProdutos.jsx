import './TabelaProdutos.css'
import React from "react";
import produtos from "../../data/produtos";

export default (props) => {

    const produtosLi = produtos.map((produto, index) => {
        return <tr key={produto.id} className={index % 2 === 0 ? 'Par' : ''}>
            <td>
                {produto.id}
            </td>
            <td>
                {produto.nome}
            </td>
            <td>
                R$ {produto.preco.toFixed(2).replace('.', ',')}
            </td>
        </tr>
    })

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                <tr>
                    <th colSpan="4">Lista de Produtos</th>
                </tr>
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                </thead>
                <tbody>
                {produtosLi}
                </tbody>
            </table>
        </div>
    )
}
