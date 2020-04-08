import React, { useState, useEffect } from 'react';
import Wrapper from '../../Components/Wrapper'
import { Col, Row } from 'react-grid-system';

import { Site, Page, Card, Button, Form } from 'tabler-react'
import "tabler-react/dist/Tabler.css";
import { PanelCoursesContainer } from '../styles';

import { useHistory } from 'react-router-dom';

import api from '../../../../services/api'

export default function EditCourse(props) {

    const history = useHistory();
    const id = props.match.params.id;

    const token = localStorage.getItem('painel-token') || false;
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [status, setStatus] = useState('');
    const [free, setFree] = useState('');
    const [validity, setValidity] = useState('');
    const [price, setPrice] = useState('');
    const [promo_price, setPromoPrice] = useState('');

    async function getCourse(id) {

        try {
            const response = await api.get(`cursos/${id}`, {
                headers: { 'X-Access-Token': token },
            });

            if (response.data) {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setFree(response.data.Free)
                setValidity(response.data.validity)
                setPrice(response.data.price)
                setPromoPrice(response.data.promo_price)
            }

        } catch (error) {
            console.log("error", error.response)
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            }
        }

    }

    /* EDIT */
    async function handleEditCourse(e) {

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
            const response = await api.put(`cursos/${id}`, data, {
                headers: { 'X-Access-Token': token },
            });
            console.log(response.data)
            
            history.push(`cursos/${id}/edit`);

        } catch (error) {
            console.log(error)
            alert('Erro ao editar Curso, tente novamente.')
        }
       
    }

    useEffect(() => {
        getCourse(id);
      
    }, [token]);


    return (
        <>

        <PanelCoursesContainer>

            
        
            <Wrapper />

                <Page.Card>

                    <Card.Header>
                        <h2 className="title_pages"> Editar Curso</h2>
                    </Card.Header>

                    <Card.Body>

                        {/* <CourseForm /> */}

                    <Form onSubmit={handleEditCourse} >


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

                        <Button.List>
                            <Button size="lg" outline color="secondary">Cancelar</Button>
                            <Button size="lg" color="success" type="submit">Atualizar</Button>
                        </Button.List>

                    </Form>
                        

                    </Card.Body>

                </Page.Card>


            </PanelCoursesContainer>

            
            <Site.Footer />

        </>
    )
}