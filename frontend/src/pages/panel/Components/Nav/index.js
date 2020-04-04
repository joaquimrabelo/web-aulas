import React from 'react';
import { Nav } from 'tabler-react';
import "tabler-react/dist/Tabler.css";

export default function NavContent() {

    return (
        <>
        <Nav>
            <Nav.Item active value="Home" icon="home" to="/painel">Home</Nav.Item>
            <Nav.Item icon="airplay" to="/painel/cursos">Cursos</Nav.Item>
            <Nav.Item icon="video" to="/painel/videos">Vídeos</Nav.Item>
            <Nav.Item icon="share" to="/painel/arquivos">Arquivos</Nav.Item>
            <Nav.Item icon="users" to="/painel/clientes">Clientes</Nav.Item>
           
        </Nav>
         </>
    ) 
}