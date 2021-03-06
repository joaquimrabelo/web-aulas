import React from 'react';
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';

import "tabler-react/dist/Tabler.css";
import { Site } from 'tabler-react';

export default function Wrapper() {

    const { signOut } = useAuth();

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
                            { icon: "user", value: "Meu perfil", to: "/perfil", LinkComponent: Link },
                            { icon: "settings", value: "Configurações", to: "/settings", LinkComponent: Link },
                            "divider",
                            { icon: "log-out", value: "Sair", onClick: () => signOut() },
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
                        { value: "Home", icon: "home", to: "/painel", LinkComponent: Link },
                        { value: "Clientes", icon: "users", to: "/painel/clientes", LinkComponent: Link },
                        { value: "Cursos", icon: "airplay", to: "/painel/cursos", LinkComponent: Link },
                        { value: "Vídeos", icon: "video", to: "/painel/videos", LinkComponent: Link },
                        { value: "Arquivos", icon: "share", to: "/painel/arquivos", LinkComponent: Link },
                    ]
                }
            }

        />

        </>
    )
}