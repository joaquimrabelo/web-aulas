import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import { HomeContainer } from './styles';
import mainImg from '../../../../assets/main.png'


export default function Home() {
    return(
        <HomeContainer> 
            <div className="bg-block">
                <div className="bg"></div>
            </div>

            <Container>
                <Row className="main-content">
                    <Col sm={6} >
                        <Row>
                            <Col className="main-title">
                                <h1><span>Plataforma de Cursos Online</span> <br />Nome do Cliente </h1>
                                
                            </Col>
                            
                        </Row>
                        <Row className="buttons-block">
                            <Col sm={6}>
                                <Link to="/login" className="btn-site button-depth ">
                                    Login
                                </Link>

                            </Col>
                            <Col sm={6}>
                                <Link to="/cadastro" className="btn-site button-depth ">
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