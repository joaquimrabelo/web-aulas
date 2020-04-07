import React, { useState, useEffect } from 'react';
import Wrapper from '../Components/Wrapper'
import { Col, Row} from 'react-grid-system'
import { Site, Page, Table, Card, Button } from 'tabler-react'
import "tabler-react/dist/Tabler.css";

import { useHistory } from 'react-router-dom';
import { PanelCoursesContainer } from './styles';

import api from '../../../services/api'

export default function PanelCourses() {

    const token = localStorage.getItem('painel-token') || false;
    const [courses, setCourses] = useState([]);
    
    /* const [photo, setPhoto] = useState('');
    const [status, setStatus] = useState('');
    const [free, setFree] = useState('');
    const [validity, setValidity] = useState('');
    const [price, setPrice] = useState('');
    const [promo_price, setPromoPrice] = useState(''); */

    async function getCourses() {

         try {
            const response = await api.get('cursos', {
                headers: { 'X-Access-Token': token },
            });

            if (response.data) {
                setCourses(response.data.courses)
            }

        } catch (error) {
            console.log("error", error.response)
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            }
        } 

    }
 
    useEffect(() => {
        getCourses(); 
 
    }, [token]);
    

    return (
        <>  

        <PanelCoursesContainer>

            <Wrapper />

            <Page.Content>
                
                    <Row>
                        <Col sm={10}>
                            <h1>Cursos</h1>
                        </Col>

                        <Col sm={2}>
                            <Button color="primary" RootComponent="a" href="/painel/cursos/add">
                                Adicionar Curso
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Table responsive="true">
                                    <Table.Header>
                                        <tr>
                                            <Table.ColHeader>ID</Table.ColHeader>
                                            <Table.ColHeader>Nome</Table.ColHeader>
                                            <Table.ColHeader>Descrição</Table.ColHeader>
                                            <Table.ColHeader>Alunos</Table.ColHeader>
                                            <Table.ColHeader>Ações</Table.ColHeader>
                                        </tr>
                                    </Table.Header>
                                    <Table.Body>
 
                                        {courses.map(course => (
       
                                        <Table.Row key={course.id}>
                                            <Table.Col>{course.id}</Table.Col>
                                            <Table.Col> {course.title} </Table.Col>
                                            <Table.Col>{course.description}</Table.Col>
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

                                        ))} 

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