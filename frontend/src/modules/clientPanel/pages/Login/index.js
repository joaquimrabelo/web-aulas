import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { LoginContainer } from './styles.js';
import { FiLogIn, FiArrowLeft, FiLock } from 'react-icons/fi';
import { Container, Row, Col } from 'react-grid-system';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        console.log("handle login")

       /*  try {
            const response = await api.post('sessions', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (error) {
            console.log(error)
            alert('Falha no login, tente novamente.')
        }  
 */
    }


    return (
        <LoginContainer>

            <Container>
                <Row>
                    <Col>
                        <h1>Faça seu login</h1>
                    </Col>
                </Row>
                <Row>
                    <Col >
                      
                        <section className="content-form">
                           
                            <form onSubmit={handleLogin}>
                                <input
                                    className="input-site"
                                    placeholder="Seu email"
                                    value={email}
                                    type="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <input
                                    className="input-site"
                                    placeholder="Sua senha"
                                    value={password}
                                    type="password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                
                                <button className="button btn-site link button-depth" type="submit">Entrar</button>

                            </form>

                        </section>

                        <div className="clean-links-block">
                           
                            <Link to="/esqueci-senha" className="clean-link">
                                <FiLock className="icon" />
                                Esqueci minha senha
                            </Link>
                        
                            <Link to="/cadastro" className="clean-link">
                                <FiLogIn className="icon" />
                                Não tenho cadastro
                            </Link>
                           
                        </div>

                        
                    </Col>

                   
                </Row>
            </Container>

        </LoginContainer>
    )

}