import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from '../../Components/Wrapper';
import { Col, Row } from 'react-grid-system';

import { Site, Page, Card, Form, Button } from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import { NewVideoContainer } from './styles.js';

import api from '../../../../services/api';

export default function PanelNewVideo(props) {

    const token = localStorage.getItem('painel-token') || false;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [photo, setPhoto] = useState('');

    const history = useHistory();

    async function handleNewVideo(e) {
        e.preventDefault();

        console.log(e.target.name + 'clicked')

        const data = {
            title,
            description,
            link, 
            price, 
            duration, 
            photo
        };

        try {
            const response = await api.post('videos', data, {
                headers: { 'X-Access-Token': token },
            });
            console.log("try..", response.data)
            history.push('/painel/videos');

        } catch (error) {
            console.log(error)
            alert('Erro ao cadastrar Vídeo, tente novamente.')
        }
    }


    return (
        <>

            <NewVideoContainer>

                <Wrapper />

                <Page.Card>

                    <Card.Header>
                        <h2 className="title_pages"> Novo Vídeo</h2>
                    </Card.Header>

                    <Card.Body>

                        <Form onSubmit={handleNewVideo}>
                            <Row>
                                <Col>
                                    <Form.Group label="Nome do Vídeo">
                                        <Form.Input
                                            name="title"
                                            placeholder="Nome do Vídeo"
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
                                            placeholder="Descrição do Vídeo"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group label="Link">
                                        <Form.Input
                                            name="link"
                                            value={link}
                                            onChange={e => setLink(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Form.Group label="Preço">
                                        <Form.Input
                                            name="price"
                                            value={price}
                                            onChange={e => setPrice(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={6}>
                                    <Form.Group label="Duração">
                                        <Form.Input
                                            name="duration"
                                            value={duration}
                                            onChange={e => setDuration(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group label="Foto">
                                        <Form.FileInput
                                            name="photo"
                                            value={photo}
                                            onChange={e => setPhoto(e.target.value)}
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

            </NewVideoContainer>

            <Site.Footer />

        </>
    )
}