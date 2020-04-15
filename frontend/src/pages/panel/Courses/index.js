import React, { useState, useEffect } from 'react';
import Wrapper from '../Components/Wrapper';
import { Col, Row} from 'react-grid-system';
import { Site, Page, Table, Card, Button } from 'tabler-react'
import "tabler-react/dist/Tabler.css";

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { useHistory, useLocation } from 'react-router-dom';
import { PanelCoursesContainer } from './styles';

import api from '../../../services/api';

export default function PanelCourses(props) {

    const token = localStorage.getItem('painel-token') || false;
    const [courses, setCourses] = useState([]);

    const history = useHistory();
    const location = useLocation();

    /* LIST ALL */
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

    /* EDIT */
    async function handleEditCourse(id) {
        console.log(id)
        history.push(`cursos/${id}/edit`)
    }

    /* DELETE */
    async function handleClickDelete(id) {
        try {
            const response = await api.delete(`cursos/${id}`, {
                headers: { 'X-Access-Token': token },
            });
            console.log(response.data)
            setCourses(courses.filter(course => course.id !== id))

        } catch (error) {
            alert("Erro ao deletar Curso, tente novamente.")
        }
    }
    
    async function handleDeleteCourse(id) {

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h2>Confirmação</h2>
                        <p>Tem certeza que deseja excluir este Curso?</p>
                        <button className="btn-modal"
                                onClick={onClose}> Não </button>
                        <button 
                            className="btn-modal"
                            onClick={(e) => {
                                handleClickDelete(id);
                                onClose();
                            }}
                        >
                            Sim, pode excluir!
                    </button>
                    </div>
                );
            }
        });

        
    }
 
    useEffect(() => {
        getCourses(); 
 
    }, [token]);
    
    useEffect(() => {
        console.log('location', location)
        
    }, [location]);

    return (
        <>  

        <PanelCoursesContainer>

            <Wrapper />

                <Page.Content>

                    { location.state !== undefined ?  
                    <Row>
                        <Col>
                            <div className="alert alert-success">{location.state.detail}</div>
                        </Col>
                    </Row> : '' }
                 
                    <Row className="title-button-block">
                        <Col sm={7} md={9}>
                            <h1>Cursos</h1>
                            {/* <p>Total de Cursos: {}</p> */}
                        </Col>

                        <Col sm={5} md={3}>
                            <Button color="primary" pill block RootComponent="a" href="/painel/cursos/add">
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

                                    {courses.length > 0 ? 

                                    (courses.map(course => (
       
                                        <Table.Row key={course.id}>
                                            <Table.Col>{course.id}</Table.Col>
                                            <Table.Col>{course.title}</Table.Col>
                                            <Table.Col>{course.description}</Table.Col>
                                            <Table.Col>200</Table.Col>
                                            <Table.Col>
                                                <Button.List>
                                                    
                                                    <Button outline size="sm" color="secondary">Vídeos e Arquivos</Button>
                                                    <Button outline size="sm" color="primary"
                                                            onClick={(e) => handleEditCourse(course.id)}>
                                                            Editar
                                                    </Button>
                                                    <Button outline size="sm" 
                                                            color="danger" 
                                                            icon="trash"
                                                            title="Deletar Curso"
                                                            onClick={(e) => handleDeleteCourse(course.id)}>
                                                             Excluir
                                                    </Button>
                                                    
                                                </Button.List>
                                            </Table.Col>
                                        </Table.Row>

                                        ))

                                        ) : (

                                        <Table.Row>
                                            <Table.Col>
                                                    Nenhum curso cadastrado!
                                            </Table.Col>
                                            
                                        </Table.Row>
                                            
                                       
                                        )}

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