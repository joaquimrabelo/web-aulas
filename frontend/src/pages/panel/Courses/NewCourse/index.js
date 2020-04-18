import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Wrapper from '../../Components/Wrapper';
import { Col, Row } from 'react-grid-system'; 

import { Site, Page, Card, Form, Button } from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import { NewCourseContainer } from './styles.js';

import api from '../../../../services/api';

export default function PanelNewCourse(props) {

    const token = localStorage.getItem('painel-token') || false;
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [status, setStatus] = useState('');
    const [free, setFree] = useState('');
    const [validity, setValidity] = useState('');
    const [price, setPrice] = useState('');
    const [promo_price, setPromoPrice] = useState('');

    const history = useHistory();

    async function handleNewCourse(e) {
        e.preventDefault();

        console.log(e.target.name + 'clicked')

        const data = {
            title,
            description, 
            photo,
            status,
            free,
            validity,
            price,
            promo_price
        };

        try {
            const response = await api.post('cursos', data, {
                headers: { 'X-Access-Token': token },
            });
            console.log("try..", response.data)
            history.push('/painel/cursos');

        } catch (error) {
            console.log(error)
            alert('Erro ao cadastrar Curso, tente novamente.')
        }
    }


    return (
        <>

        <NewCourseContainer>

                <Wrapper />

                <Page.Card>

                    <Card.Header>
                        <h2 className="title_pages"> Novo Curso</h2>
                    </Card.Header>

                    <Card.Body>

                        <Form onSubmit={handleNewCourse}>
                            <Row>
                                <Col>
                                    <Form.Group label="Nome do Curso">
                                        <Form.Input
                                            name="title"
                                            placeholder="Nome do Curso"
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
                                            placeholder="Descrição do Curso"
                                            value={description}
                                            onChange={e => setDescription(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group label="Foto">
                                        <Form.FileInput
                                            name="photo"
                                            value={photo}
                                            onChange={e => setPhoto(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group label="Status">
                                        <Form.Select
                                            name="status"
                                            value={status}
                                            onChange={e => setStatus(e.target.value)}>
                                            <option value="true">
                                                Ativo
                                            </option>
                                            <option value="false">
                                                Inativo
                                            </option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group label="Validade (em dias)">
                                        <Form.Input
                                            name="validity"
                                            placeholder="Quantos dias"
                                            value={validity}
                                            onChange={e => setValidity(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={4}>
                                    <Form.Group label="Preço">
                                        <Form.InputGroup>
                                            <Form.InputGroupPrepend>
                                                <Form.InputGroupText>
                                                    R$
                                            </Form.InputGroupText>
                                            </Form.InputGroupPrepend>
                                            <Form.Input
                                                name="price"
                                                value={price}
                                                onChange={e => setPrice(e.target.value)}
                                            />
                                            
                                        </Form.InputGroup>
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>

                                    <Form.Group label="Preço em Promoção">
                                        <Form.InputGroup>
                                            <Form.InputGroupPrepend>
                                                <Form.InputGroupText>
                                                    R$
                                                </Form.InputGroupText>
                                            </Form.InputGroupPrepend>
                                            <Form.Input
                                                name="promo_price"
                                                placeholder="Valor em promoção"
                                                value={promo_price}
                                                onChange={e => setPromoPrice(e.target.value)} />

                                        </Form.InputGroup>
                                    </Form.Group>

                                </Col>
                                <Col sm={4}>
                                    <Form.Group label="Gratuito?">
                                        <Form.SwitchStack>
                                            <Form.Switch
                                                type="checkbox"
                                                name="free"
                                                label="Sim"
                                                value={free}
                                                onChange={e => setFree(e.target.value)}
                                            />
                                        </Form.SwitchStack>
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

          </NewCourseContainer>

          <Site.Footer />

        </>
    )
}