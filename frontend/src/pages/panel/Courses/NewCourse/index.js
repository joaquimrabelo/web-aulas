import React from 'react';

import Wrapper from '../../Components/Wrapper'
import { Col, Row } from 'react-grid-system' 
import { Site, Page, Card, Form, Button } from 'tabler-react'
import "tabler-react/dist/Tabler.css";

/* import { PanelCoursesContainer } from './styles' */

export default function PanelNewCourse() {

    return (
        <>

         {/*  <PanelCoursesContainer> */}

                <Wrapper />

                <Page.Card>

                    <Card.Header>
                    <h2> Novo Curso</h2>
                    </Card.Header>

                    <Card.Body>

                        <Form onSubmit={(event) => console.log(event.target.name + 'clicked')}>
                            <Row>
                                <Col>
                                    <Form.Group label="Nome do Curso">
                                    <Form.Input
                                        name="name"
                                        placeholder="Nome do Curso"
                                    />
                                </Form.Group>
                                </Col>
                            </Row>
                        <Row>
                            <Col>
                                <Form.Group label="Descrição">
                                    <Form.Input
                                        name="name"
                                        placeholder="Nome do Curso"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>
                                <Form.Group label="Foto">
                                    <Form.FileInput />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group label="Status">
                                    <Form.Select>
                                        <option>
                                            Ativo
                                        </option>
                                        <option>
                                            Inativo
                                        </option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Form.Group label="Validade">
                                    <Form.MaskedInput
                                        placeholder="00/00/0000"
                                        mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6}>
                                <Form.Group label="Preço">
                                    <Form.Input
                                        name="name"
                                        placeholder="Nome do Curso"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group label="Preço Promoção">
                                    <Form.Input
                                        name="name"
                                        placeholder="Nome do Curso"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                       

                        

                        
                       
                        
                        

                            
                        </Form>

                    </Card.Body>

                    <Card.Footer>
                        <Button.List>
                            <Button outline color="secondary">Cancelar</Button>
                            <Button color="success">Salvar</Button>
                        </Button.List>

                        
                    </Card.Footer>

               

                </Page.Card>

          {/*   </PanelCoursesContainer> */}

            <Site.Footer />

        </>
    )
}