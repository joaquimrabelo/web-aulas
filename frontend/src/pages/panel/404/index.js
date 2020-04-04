import React from 'react';
import { Error404Container } from './styles';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


export default function Error404() {

    return (
        <>
        <Error404Container>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/painel" className="clean-link">
                <FiArrowLeft className="icon" />
                Voltar para a Home
            </Link>
        </Error404Container>
        </>
    )

}