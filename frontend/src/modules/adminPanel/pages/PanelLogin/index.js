import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PanelContainer } from './styles.js';
import { Container, Row, Col } from 'react-grid-system';

import api from '../../../../services/api';

export default function PanelLogin() {

    const history = useHistory();
    const token = localStorage.getItem('painel-token') || false;
    if(token) {
        history.push('/painel');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('painel/login', { email, password });

            if (response.data.auth) {
                localStorage.setItem('painel-token', response.data.token)
                history.push('/painel');
            }   

        } catch (error) {

            if(error.response && error.response.data) {
                setLoginError(true);
                setLoginErrorMessage(error.response.data.message)
            }
        }  

    }

    function AlertError() {
        if(loginError) {
            return <div className="alert-panel">{loginErrorMessage}</div>
        }
        return null;
    }

    return (
        <PanelContainer>

            <Container>
                <Row>
                    <Col>
                        <h1>Admin</h1>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <section className="content-form">
                            <AlertError loginError={true} />

                            <form onSubmit={handleLogin}>
                                <input
                                    className="input-site"
                                    placeholder="Seu email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <input
                                    className="input-site"
                                    type="password"
                                    placeholder="Sua senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                                <button className="button btn-site link button-depth" type="submit">Entrar</button>

                            </form>

                        </section>
                      

                    </Col>

                </Row>
            </Container>

        </PanelContainer>
    )

}