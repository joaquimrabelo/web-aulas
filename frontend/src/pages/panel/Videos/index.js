import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

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

                    <h1>Vídeos</h1>

                    <Row>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Vídeo sobre a aula 1</Card.Title>
                                    <Card.Options>
                                        <Button outline color="primary" size="sm">
                                            Editar
                                </Button>
                                        <Button outline color="danger" size="sm" className="ml-2">
                                            Desativar
                                </Button>
                                    </Card.Options>
                                </Card.Header>
                                <Card.Body>
                                    Descrição sobre a aula
                        </Card.Body>
                                <Card.Footer>Cursos: Curso1</Card.Footer>
                            </Card>

                        </Col>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Vídeo sobre a aula 2ds fsdf dsfsd fsdfsdfsdfsdxvx vv \xcv xzcv xcvcxzvzxcvxcvx f </Card.Title>
                                    <Card.Options>
                                        <Button outline color="primary" size="sm">
                                            Editar
                                </Button>
                                        <Button outline color="danger" size="sm" className="ml-2">
                                            Desativar
                                </Button>
                                    </Card.Options>
                                </Card.Header>
                                <Card.Body>
                                    Descrição sobre a aula
                        </Card.Body>
                                <Card.Footer>Cursos: Curso1</Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Vídeo sobre a aula 1</Card.Title>
                                    <Card.Options>
                                        <Button outline color="primary" size="sm">
                                            Editar
                                </Button>
                                        <Button outline color="danger" size="sm" className="ml-2">
                                            Desativar
                                </Button>
                                    </Card.Options>
                                </Card.Header>
                                <Card.Body>
                                    Descrição sobre a aula
                        </Card.Body>
                                <Card.Footer>Cursos: Curso1</Card.Footer>
                            </Card>
                        </Col>

                    
                        <Col sm={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Vídeo sobre a aula 1</Card.Title>
                                    <Card.Options>
                                        <Button outline color="primary" size="sm">
                                            Editar
                                </Button>
                                        <Button outline color="danger" size="sm" className="ml-2">
                                            Desativar
                                </Button>
                                    </Card.Options>
                                </Card.Header>
                                <Card.Body>
                                    Descrição sobre a aula
                        </Card.Body>
                                <Card.Footer>Cursos: Curso1</Card.Footer>
                            </Card>

                        </Col>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Vídeo sobre a aula 2ds fsdf dsfsd f </Card.Title>
                                    <Card.Options>
                                        <Button outline color="primary" size="sm">
                                            Editar
                                        </Button>
                                        <Button outline color="danger" size="sm" className="ml-2">
                                            Desativar
                                        </Button>
                                    </Card.Options>
                                </Card.Header>
                                <Card.Body>
                                    Descrição sobre a aula
                                    
                                </Card.Body>
                                <Card.Footer><a href="https://www.youtube.com/watch?v=P2TcQ3h0ipQ">Ver vídeo</a></Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>Vídeo sobre a aula 1</Card.Title>
                                    <Card.Options>
                                        <Button outline color="primary" size="sm">
                                            Editar
                                </Button>
                                        <Button outline color="danger" size="sm" className="ml-2">
                                            Desativar
                                </Button>
                                    </Card.Options>
                                </Card.Header>
                                <Card.Body>
                                    Descrição sobre a aula
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