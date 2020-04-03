import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container, Row, Col } from 'react-grid-system';

import { RegisterContainer } from './styles.js';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    /* const history = useHistory(); */

    async function handleRegister(e) {
        e.preventDefault();
        console.log("handle register")

        const data = {
            name,
            email,
            password,
            whatsapp
        };

        /* try {
            const response = await api.post('users', data);

            alert(`Seu ID de acesso: ${response.data.users}`);
            history.push('/');

        } catch (error) {
            alert('Erro no cadastro, tente novamente');
        } */
    } 

    return (
        <RegisterContainer>
            <Container>
                <Row>
                    <Col>
                        <h1>Cadastro</h1>
                       
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} offset={{ md: 2 }}>
                        <section className="content-form">

                            <form onSubmit={handleRegister}>
                                <input
                                    placeholder="Digite seu nome"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />

                                <input
                                    type="password"
                                    placeholder="Digite uma senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />

                                <input
                                    placeholder="Digite seu WhatsApp"
                                    value={whatsapp}
                                    onChange={e => setWhatsapp(e.target.value)}
                                />

                                <button className="button" type="submit">Cadastrar</button>
                            </form>

                          

                        </section>

                        <div className="clean-links-block">

                            <Link to="/" className="clean-link">
                                <FiArrowLeft className="icon" />
                                        Voltar para a Home
                                    </Link>

                            <Link to="/login" className="clean-link">
                                Fazer login
                                        <FiArrowRight className="icon" />
                            </Link>

                        </div>


                        

                    </Col>
                </Row>
            </Container>
            
        </RegisterContainer>
    )
}