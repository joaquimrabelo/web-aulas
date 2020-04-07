import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { ForgotContainer } from './styles.js';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import { Container, Row, Col } from 'react-grid-system';

export default function Forgot() {

    const [email, setEmail] = useState('');
    /* const [password, setPassword] = useState(''); */

    const history = useHistory();

    async function handleForgot(e) {
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
        <ForgotContainer>

            <Container>
                <Row>
                    <Col>
                        <h1>Esqueci minha senha</h1>
                    </Col>
                </Row>
                <Row>
                    <Col >

                        <section className="content-form">

                            <form onSubmit={handleForgot}>
                                <input
                                    placeholder="Seu email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />


                                <button className="button link button-depth" type="submit">Recuperar acesso</button>

                            </form>

                        </section>

                        <div className="clean-links-block">

                            <Link to="/login" className="clean-link">
                                <FiArrowLeft className="icon" />
                                    Fazer Login
                                </Link>

                            <Link to="/cadastro" className="clean-link">
                                <FiLogIn className="icon" />
                                    Não tenho cadastro
                                </Link>

                        </div>


                    </Col>




                </Row>
            </Container>

        </ForgotContainer>
    )

}