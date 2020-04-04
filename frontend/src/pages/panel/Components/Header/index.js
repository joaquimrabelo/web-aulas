import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { AccountDropdown } from 'tabler-react';

export default function HeaderContent() {

    return (
        <>
            <Row>
                <Col sm={10}>
                    <h2>LOGO</h2>
                </Col>
                <Col sm={2}>
                    <AccountDropdown
                        avatarURL="/"
                        icon="user"
                        name="Carolina"
                        description="Administrador"
                        options={[
                            { icon: "user", value: "Meu perfil", to: "/perfil" },
                            { icon: "settings", value: "Configurações", to: "/settings" },
                            "divider",
                            { icon: "log-out", value: "Sair", to: "/" },
                        ]}
                    />

                </Col>
            </Row>
        </>
    )
}