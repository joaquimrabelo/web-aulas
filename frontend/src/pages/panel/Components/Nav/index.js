import React from 'react';
import { Nav } from 'tabler-react';
import "tabler-react/dist/Tabler.css";

export default function NavContent() {

    
    return (
        <>
        
        
        <Nav>
            <Nav.Item hasSubNav active value="Home" icon="home">
                <Nav.SubItem value="Home" />
            </Nav.Item>
            <Nav.Item icon="airplay" to="http://www.example.com">Cursos</Nav.Item>
            <Nav.Item icon="video" to="http://www.example.com">Vídeos</Nav.Item>
            <Nav.Item icon="share" to="http://www.example.com">Arquivos</Nav.Item>
            <Nav.Item icon="users" to="http://www.example.com">Clientes</Nav.Item>
           
        </Nav>
            </>
    ) 
}