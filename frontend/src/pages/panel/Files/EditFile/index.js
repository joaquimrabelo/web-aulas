import React, { useState, useEffect } from 'react';
import Wrapper from '../../Components/Wrapper'
import { Col, Row } from 'react-grid-system';

import { Site, Page, Card, Button, Form } from 'tabler-react'
import "tabler-react/dist/Tabler.css";
import { PanelFilesContainer } from '../styles';

import { useHistory } from 'react-router-dom';

import api from '../../../../services/api'

export default function EditFile(props) {

    const history = useHistory();
    const id = props.match.params.id;

    const token = localStorage.getItem('painel-token') || false;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    async function getFile(id) {

        try {
            const response = await api.get(`arquivos/${id}`, {
                headers: { 'X-Access-Token': token },
            });

            if (response.data) {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setFile(response.data.file)
            }

        } catch (error) {
            console.log("error", error.response)
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            }
        }

    }

    /* EDIT */
    async function handleEditFile(e) {

        e.preventDefault();

        console.log(e.target.name + 'clicked')

        const data = {
            title,
            description,
            file
        };

        try {
            const response = await api.put(`arquivos/${id}`, data, {
                headers: { 'X-Access-Token': token },
            });
            console.log(response.data)

            history.push({
                pathname: '/painel/arquivos',
                state: { detail: response.data.message }
            });

        } catch (error) {
            console.log(error)
            alert('Erro ao editar Arquivo, tente novamente.');
        }

    }

    useEffect(() => {
        getFile(id);

    }, [token]);


    return (
        <>

            <PanelFilesContainer>

                <Wrapper />

                <Page.Card>

                    <Card.Header>
                        <h2 className="title_pages"> Editar Arquivo</h2>
                    </Card.Header>

                    <Card.Body>

                        <Form onSubmit={handleEditFile} >


                            <Row>
                                <Col>
                                    <Form.Group label="Nome do Arquivo">
                                        <Form.Input
                                            name="title"
                                            placeholder="Nome do Arquivo"
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group label="Descrição">
                                        <Form.Input
                                            name="description"
                                            placeholder="Descrição do Arquivo"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group label="Arquivo">
                                        <Form.FileInput
                                            name="file"
                                            value={file}
                                            onChange={e => setFile(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                
                            </Row>


                            <Button.List className="buttons-card-footer-block" >
                                <Button size="lg" pill outline color="secondary">Cancelar</Button>
                                <Button size="lg" pill color="success" type="submit">Atualizar</Button>
                            </Button.List>



                        </Form>


                    </Card.Body>

                </Page.Card>


            </PanelFilesContainer>


            <Site.Footer />

        </>
    )
}