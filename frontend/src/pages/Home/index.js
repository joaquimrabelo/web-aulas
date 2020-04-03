import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import { HomeContainer } from './styles';
import mainImg from '../../assets/main.png'


export default function Home() {
    return(
        <HomeContainer> 
            <div class="bg-block">
                <div class="bg"></div>
            </div>

            <Container>
                <Row className="main-content">
                    <Col sm={6} >
                        <Row>
                            <Col>
                                <h1><span>Plataforma de</span> Cursos Online </h1>
                                <p>Texto sobre a Plataforma de Cursos Online</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Link to="/login" className="button button-depth ">
                                    Login
                                </Link>

                            </Col>
                            <Col sm={6}>
                                <Link to="/cadastro" className="button button-depth ">
                                    Cadastro
                                </Link>
                            </Col>
                        </Row>
                    
                    </Col>
                    <Col sm={6}>
                        <img src={mainImg} alt="Main" />
                    </Col>

                </Row>
            </Container>          
        </HomeContainer>
    )

}