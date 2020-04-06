import React from 'react';
import Wrapper from '../Components/Wrapper'
import { Col, Row} from 'react-grid-system'
import { Site, Page, Table, Card, Button } from 'tabler-react'
import "tabler-react/dist/Tabler.css";

import { PanelCoursesContainer } from './styles'

export default function PanelCourses() {

    return (
        <>  

        <PanelCoursesContainer>

            <Wrapper />

            <Page.Content>
                
                <h1>Cursos</h1>

                    <Row>
                        <Col>

                            <Card>
                                <Table responsive="true">
                                    <Table.Header>
                                        <Table.ColHeader>ID</Table.ColHeader>
                                        <Table.ColHeader>Nome</Table.ColHeader>
                                        <Table.ColHeader>Vídeos</Table.ColHeader>
                                        <Table.ColHeader>Alunos</Table.ColHeader>
                                        <Table.ColHeader>Ações</Table.ColHeader>
                                    </Table.Header>
                                    <Table.Body>

                                        <Table.Row>
                                            <Table.Col>1</Table.Col>
                                            <Table.Col> Curso 1</Table.Col>
                                            <Table.Col>14</Table.Col>
                                            <Table.Col>200</Table.Col>
                                            <Table.Col>

                                                <Button.List>

                                                    <Button outline size="sm" color="secondary">Ver Alunos</Button>
                                                    <Button outline size="sm" color="primary"> Vídeos</Button>
                                                    <Button outline size="sm" color="primary">Editar</Button>
                                                    <Button outline size="sm" color="danger">Desativar</Button>
                                                </Button.List>
                                            </Table.Col>
                                        </Table.Row>

                                        <Table.Row>
                                            <Table.Col>1</Table.Col>
                                            <Table.Col> Curso 2</Table.Col>
                                            <Table.Col>14</Table.Col>
                                            <Table.Col>200</Table.Col>
                                            <Table.Col>

                                                <Button.List>

                                                    <Button outline size="sm" color="secondary">Ver Alunos</Button>
                                                    <Button outline size="sm" color="primary">Vídeos</Button>
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

        </PanelCoursesContainer>

        <Site.Footer />
      
        </>
    )
}