import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import "tabler-react/dist/Tabler.css";
import { Table, Button, Card, Page, Site  } from 'tabler-react';
import { PanelClientsContainer } from './styles.js';

import Wrapper from '../Components/Wrapper'

export default function PanelClients() {

    return (
        <>

            <PanelClientsContainer>

            <Wrapper />
            <Page.Content>

                <Row className="title-button-block">
                    <Col sm={9}>
                            <h1>Clientes</h1>
                    </Col>

                    <Col sm={3} >
                        <Button size="md" pill color="primary">Adicionar Cliente</Button>
                    </Col>
                </Row>
                           
                
                  
                <Row>
                    <Col>

                        <Card>
                            <Table responsive="true">
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

                                                <Button outline size="sm" color="secondary">Cursos</Button>
                                                <Button outline size="sm" color="primary">Editar</Button>
                                                <Button outline size="sm" color="danger">Desativar</Button>
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

                                                <Button outline size="sm" color="secondary">Cursos</Button>
                                                <Button outline size="sm" color="primary">Editar</Button>
                                                <Button outline size="sm" color="danger">Desativar</Button>
                                            </Button.List>

                                        </Table.Col>
                                    </Table.Row>

                                        <Table.Row>
                                            <Table.Col>3</Table.Col>
                                            <Table.Col>Jon Doe</Table.Col>
                                            <Table.Col>johndoe@email.com</Table.Col>
                                            <Table.Col>(99) 9999-99999</Table.Col>
                                            <Table.Col>
                                                <Button.List>

                                                    <Button outline size="sm" color="secondary">Cursos</Button>
                                                    <Button outline size="sm" color="primary">Editar</Button>
                                                    <Button outline size="sm" color="danger">Desativar</Button>
                                                </Button.List>

                                            </Table.Col>
                                        </Table.Row>
                                </Table.Body>
                            </Table>

                        </Card>

                    </Col>
                </Row>

            </Page.Content>
            </PanelClientsContainer>


            <Site.Footer />

            
        </>
    )
}