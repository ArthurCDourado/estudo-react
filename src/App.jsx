import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia"
import './App.css'
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default _ =>
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">
            <Card titulo="#08 - Renderização Condicional" color="#ff3377">
                <ParOuImpar numero={15}/>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo usuario={{}}/>
                <UsuarioInfo/>
            </Card>
            <Card titulo="#07 - Desafio Repetição" color="#008744">
                <TabelaProdutos/>
            </Card>
            <Card titulo="#06 - Repetição" color="#88d8b0">
                <ListaAlunos/>
            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#251e3e">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
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


