import React, { useState } from 'react';
import { Col, Row } from 'react-grid-system';

import { Form, Button } from 'tabler-react';
import "tabler-react/dist/Tabler.css";

const CourseForm = (props) => {
  
  /*   const [ setTitle] = useState('');
    const [ setDescription] = useState('');
    const [ setPhoto] = useState('');
    const [ setStatus] = useState('');
    const [ setFree] = useState('');
    const [ setValidity] = useState('');
    const [ setPrice] = useState('');
    const [ setPromoPrice] = useState(''); */

    console.log(props)

    const [courses, setCourses] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [status, setStatus] = useState('');
    const [free, setFree] = useState('');
    const [validity, setValidity] = useState('');
    const [price, setPrice] = useState('');
    const [promo_price, setPromoPrice] = useState('');


    return (
        <>  

       <Form onSubmit={props.handleNewCourse} >


            <Row>
                <Col>
                    <Form.Group label="Nome do Curso">
                        <Form.Input
                            name="title"
                            placeholder="Nome do Curso"
                            value={props.title}
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
                            value={props.description}
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
                            value={props.photo}
                            onChange={e => setPhoto(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col sm={4}>
                    <Form.Group label="Status">
                        <Form.Select 
                            name="status" 
                            value={props.status}
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
                            value={props.validity}
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
                                value={props.price}
                                onChange={e => setPrice(e.target.value)}
                            />
                            <Form.InputGroupAppend>
                                <Form.InputGroupText>
                                    ,00
                                </Form.InputGroupText>
                            </Form.InputGroupAppend>
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
                                value={props.promo_price}
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
                                value={props.free}
                                onChange={e => setFree(e.target.value)}
                            />
                        </Form.SwitchStack>
                    </Form.Group>
                </Col>
            </Row>



                    <Button.List>
                        <Button size="lg" outline color="secondary">Cancelar</Button>
                        <Button size="lg" color="success" type="submit">Salvar</Button>
                    </Button.List>

                </Form>



    </>

    )


}

export default CourseForm;