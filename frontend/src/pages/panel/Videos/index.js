import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player';

import { Site, Page, Card, Button} from 'tabler-react';
import Wrapper from '../Components/Wrapper'

import "tabler-react/dist/Tabler.css";
import { PanelVideosContainer } from './styles.js';

export default function PanelVideos() {

    return (
        <>
            <PanelVideosContainer>
              
                <Wrapper />

                <Page.Content>

                    <Row className="title-button-block">
                        <Col sm={7} md={9}>
                            <h1>Vídeos</h1>
                        </Col>

                        <Col sm={5} md={3}>
                            <Button color="primary" pill block RootComponent="a" href="/painel/videos/add">
                                Adicionar Vídeo
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                       Título
                                    </Card.Title>
                                    <Card.Options>
                                        <Button outline color="primary" size="sm">
                                            Editar
                                        </Button>
                                        <Button outline color="secondary" size="sm" className="ml-2">
                                            Desativar
                                        </Button>
                                        <Button outline color="danger" size="sm" className="ml-2" icon="trash" />
                                        
                                    </Card.Options>
                                </Card.Header>
                                <Card.Body>
                                    <p>Descrição</p>
                                    <ReactPlayer 
                                        url='https://www.youtube.com/watch?'
                                        width="100%" 
                                        height="230px" />
                                </Card.Body>
                                <Card.Footer>Cursos: Curso1</Card.Footer>
                            </Card>

                        </Col>
                       
                    
                   

                    </Row>

                    

                </Page.Content>


            </PanelVideosContainer>
                <Site.Footer />
        </>
    )
}