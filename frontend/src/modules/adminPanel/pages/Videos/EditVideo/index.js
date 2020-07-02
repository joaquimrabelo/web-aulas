import React, { useState, useEffect } from 'react';
import Wrapper from '../../../components/Wrapper';
import { Col, Row } from 'react-grid-system';

import { Site, Page, Card, Button, Form } from 'tabler-react'
import "tabler-react/dist/Tabler.css";
import { PanelVideosContainer } from '../styles';

import { useHistory } from 'react-router-dom';

import api from '../../../../../services/api';

export default function EditVideo(props) {

    const history = useHistory();
    const id = props.match.params.id;

    const token = localStorage.getItem('painel-token') || false;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [photo, setPhoto] = useState('');

    async function getVideo(id) {

        try {
            const response = await api.get(`videos/${id}`, {
                headers: { 'X-Access-Token': token },
            });

            if (response.data) {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setLink(response.data.link)
                setPrice(response.data.price)
                setDuration(response.data.duration)
                /* setPhoto(response.data.photo) */
                console.log(response.data.photo)
            }

        } catch (error) {
            console.log("error", error.response)
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            }
        }

    }

    /* EDIT */
    async function handleEditVideo(e) {

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
            const response = await api.put(`videos/${id}`, data, {
                headers: { 'X-Access-Token': token },
            });
            console.log(response.data)

            history.push({
                pathname: '/painel/videos',
                state: { detail: response.data.message }
            });

        } catch (error) {
            console.log(error)
            alert('Erro ao editar Vídeo, tente novamente.');
        }

    }

    useEffect(() => {
        getVideo(id);

    }, [token]);


    return (
        <>

            <PanelVideosContainer>

                <Wrapper />

                <Page.Card>

                    <Card.Header>
                        <h2 className="title_pages"> Editar Vídeo</h2>
                    </Card.Header>

                    <Card.Body>

                        <Form onSubmit={handleEditVideo} >


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
                                <Button size="lg" pill color="success" type="submit">Atualizar</Button>
                            </Button.List>



                        </Form>


                    </Card.Body>

                </Page.Card>


            </PanelVideosContainer>


            <Site.Footer />

        </>
    )
}