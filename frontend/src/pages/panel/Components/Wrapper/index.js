import React from 'react';
import { useHistory } from 'react-router-dom'

import "tabler-react/dist/Tabler.css";

import { Site } from 'tabler-react';

export default function Wrapper() {

    const history = useHistory();
    const token = localStorage.getItem('painel-token') || false;
    if (!token) {
        history.push('/painel/login');
    }

    function handleLogout(e) {
        localStorage.removeItem('painel-token')
        history.push('/painel/login');
    }

    return (
        <>  

        <Site.Wrapper
            headerProps={
                {
                    accountDropdown: {
                        avatarURL: "/",
                        icon: "users",
                        name: "Carolina",
                        description: "Administrador",
                        options: [
                            { icon: "user", value: "Meu perfil", to: "/perfil" },
                            { icon: "settings", value: "Configurações", to: "/settings" },
                            "divider",
                            { icon: "log-out", value: "Sair", onClick: () => handleLogout() },
                        ]
                    },
                    imageURL: "http://w42.com.br/assets/site/img/w42-logo.svg",
                    alt: "Nome da Empresa",
                    href: "/painel",
                }
            }

            navProps={
                {
                    itemsObjects: [
                        { value: "Home", icon: "home", to: "/painel" },
                        { value: "Clientes", icon: "users", to: "/painel/clientes" },
                        { value: "Cursos", icon: "airplay", to: "/painel/cursos" },
                        { value: "Vídeos", icon: "video", to: "/painel/videos" },
                        { value: "Arquivos", icon: "share", to: "/painel/arquivos" },
                    ]
                }
            }

        />

        </>
    )
}