import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { PanelContainer } from './styles.js';
import { Container, Row, Col } from 'react-grid-system';

export default function Panel() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        console.log("handle login")

        /* try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (error) {
            alert('Falha no login, tente novamente.')
        } */

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

                            <form onSubmit={handleLogin}>
                                <input
                                    placeholder="Seu email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <input
                                    placeholder="Sua senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                                <button className="button link button-depth" type="submit">Entrar</button>

                            </form>

                        </section>
                      

                    </Col>

                </Row>
            </Container>

        </PanelContainer>
    )

}