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
        console.log("handle forgot")
        history.push('/')
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
                                    className="input-site"
                                    placeholder="Seu email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />


                                <button className="button btn-site link button-depth" type="submit">Recuperar acesso</button>

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