import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-grid-system';

import "tabler-react/dist/Tabler.css";
import { Table, Button, Card, Page, Site  } from 'tabler-react';
import { PanelClientsContainer } from './styles.js';

import Wrapper from '../../components/Wrapper';

export default function PanelClients() {

    const [totalClients, setTotalClients] = useState(0)

    return (
        <>

            <PanelClientsContainer>

            <Wrapper />
            <Page.Content>

                <div className="title-button-block">
                    <Col sm={7} md={9}>
                        <h1>Clientes</h1>
                        <p>Total de Clientes: {totalClients}</p> 
                    </Col>

                    <Col sm={5} md={3}>
                        <Button color="primary" pill block RootComponent="a" href="/painel/clientes/add">
                            Adicionar Cliente
                        </Button>
                    </Col>
                </div>

                <Row>
                    <Col>

                        <Card>
                            <Table responsive="true">
                                <Table.Header>
                                    <tr>
                                        <Table.ColHeader>ID</Table.ColHeader>
                                        <Table.ColHeader>Nome</Table.ColHeader>
                                        <Table.ColHeader>Email</Table.ColHeader>
                                        <Table.ColHeader>Telefone</Table.ColHeader>
                                        <Table.ColHeader>Ações</Table.ColHeader>
                                    </tr>
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