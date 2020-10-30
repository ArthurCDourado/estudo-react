import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia"
import './App.css'
import FamiliaMembro from "./components/basicos/FamiliaMembro";

export default _ =>
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">
            <Card titulo="#05 - Componente com Filhos" color="#251e3e">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#fe4a49">
                <Aleatorio valorMaximo={60} valorMinimo={1} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#2ab7ca">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#fed766">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota={9.3} />
            </Card>

            <Card titulo="#01 - Com Parâmetro" color="#451e3e">
                <Primeiro />
            </Card>
        </div>
    </div>


