import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from '../../Components/Wrapper';
import { Col, Row } from 'react-grid-system';

import { Site, Page, Card, Form, Button } from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import { NewFileContainer } from './styles.js';

import api from '../../../../services/api';

export default function PanelNewFile(props) {

    const token = localStorage.getItem('painel-token') || false;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');

    const history = useHistory();

    async function handleNewFile(e) {
        e.preventDefault();

        console.log(e.target.name + 'clicked')

        const data = {
            title,
            description,
            file
        };

        try {
            const response = await api.post('arquivos', data, {
                headers: { 'X-Access-Token': token },
            });
            console.log("try..", response.data)
            history.push('/painel/arquivos');

        } catch (error) {
            console.log(error)
            alert('Erro ao cadastrar Arquivo, tente novamente.')
        }
    }


    return (
        <>

            <NewFileContainer>

                <Wrapper />

                <Page.Card>

                    <Card.Header>
                        <h2 className="title_pages"> Novo Arquivo</h2>
                    </Card.Header>

                    <Card.Body>

                        <Form onSubmit={handleNewFile}>
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
                                <Button size="lg" pill color="success" type="submit" >Salvar</Button>
                            </Button.List>

                        </Form>

                    </Card.Body>

                </Page.Card>

            </NewFileContainer>

            <Site.Footer />

        </>
    )
}