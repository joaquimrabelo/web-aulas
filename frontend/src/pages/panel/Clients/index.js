import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import NavContent from '../Components/Nav';
import HeaderContent from '../Components/Header';

import "tabler-react/dist/Tabler.css";
import { Table, Button, Form, Card  } from 'tabler-react';
import { PanelClientsContainer } from './styles.js';

export default function PanelClients() {

    return (
        <>
            <PanelClientsContainer>
                <Container>
                    <HeaderContent />
                    <Row>
                        <Col>
                            <NavContent />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Clientes</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                        <Card>
                                <Table>
                                    <Table.Header>
                                        <Table.ColHeader>ID</Table.ColHeader>
                                        <Table.ColHeader>Nome</Table.ColHeader>
                                        <Table.ColHeader>Email</Table.ColHeader>
                                        <Table.ColHeader>Telefone</Table.ColHeader>
                                        <Table.ColHeader>Ações</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Col>1</Table.Col>
                                            <Table.Col> John Doe</Table.Col>
                                            <Table.Col>johndoe@email.com</Table.Col>
                                            <Table.Col>(99) 9999-99999</Table.Col>
                                            <Table.Col>

                                                <Button.List>
                                                    
                                                    <Button outline color="secondary">Cursos</Button>
                                                    <Button outline color="primary">Editar</Button>
                                                    <Button outline color="danger">Desativar</Button>
                                                </Button.List>
                                            </Table.Col>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Col>2</Table.Col>
                                            <Table.Col>Jon Doe</Table.Col>
                                            <Table.Col>johndoe@email.com</Table.Col>
                                            <Table.Col>(99) 9999-99999</Table.Col>
                                            <Table.Col>
                                                <Button.List>
                                                    
                                                    <Button outline color="secondary">Cursos</Button>
                                                    <Button outline color="primary">Editar</Button>
                                                    <Button outline color="danger">Desativar</Button>
                                                </Button.List>
                                                
                                            </Table.Col>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>

                        </Card>
                            
                        </Col>
                    </Row>
                </Container>
            </PanelClientsContainer>
        </>
    )
}