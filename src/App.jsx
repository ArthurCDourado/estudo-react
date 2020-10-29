import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import './App.css'

export default _ =>
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">
            <Card titulo="#04 - Desafio Aleatorio">
                <Aleatorio valorMaximo={60} valorMinimo={1}/>
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota={9.3}/>
            </Card>

            <Card titulo="#01 - Com Parâmetro">
                <Primeiro/>
            </Card>
        </div>
    </div>

//forma mais enxuta de se criar um componente React


