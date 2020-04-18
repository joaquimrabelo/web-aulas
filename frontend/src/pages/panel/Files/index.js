import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-grid-system';
import Wrapper from '../Components/Wrapper';
import { Site, Page, Table, Card, Button } from 'tabler-react';

import "tabler-react/dist/Tabler.css";
import { PanelFilesContainer } from './styles.js';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { useHistory, useLocation } from 'react-router-dom';
import { PanelFileContainer } from './styles';

import api from '../../../services/api';


export default function PanelFiles(props) {

    const token = localStorage.getItem('painel-token') || false;
    const [files, setFiles] = useState([]);
    const [totalFiles, setTotalFiles] = useState(0);

    const history = useHistory();
    const location = useLocation();

    /* LIST ALL */
    async function getFiles() {

        try {
            const response = await api.get('arquivos', {
                headers: { 'X-Access-Token': token },
            });

            if (response.data) {
                setFiles(response.data)
            }

        } catch (error) {
            console.log("error", error.response)
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            }
        }

    }
    /* EDIT */
    async function handleEditFile(id) {
        console.log(id)
        history.push(`arquivos/${id}/edit`)
    }

    /* DELETE */
    async function handleClickDelete(id) {
        try {
            const response = await api.delete(`arquivos/${id}`, {
                headers: { 'X-Access-Token': token },
            });
            console.log(response.data)
            setFiles(files.filter(file => file.id !== id))

        } catch (error) {
            alert("Erro ao deletar Arquivo, tente novamente.")
        }
    }

    async function handleDeleteFile(id) {

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h2>Confirmação</h2>
                        <p>Tem certeza que deseja excluir este Arquivo?</p>
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
        getFiles();

    }, [token]);

    useEffect(() => {
        console.log('location', location)

    }, [location]);

    return (
        <>
            <PanelFilesContainer>
                <Wrapper />
                <Page.Content>

                    {location.state !== undefined ?
                        <Row>
                            <Col>
                                <div className="alert alert-success">{location.state.detail}</div>
                            </Col>
                        </Row> : ''}
                    
                    <div className="title-button-block">
                        <Col sm={7} md={9}>
                            <h1>Arquivos</h1>
                            <p>Total de Arquivos: {totalFiles}</p> 
                        </Col>

                        <Col sm={5} md={3}>
                            <Button color="primary" pill block RootComponent="a" href="/painel/arquivos/add">
                                Adicionar Arquivo
                            </Button>
                        </Col>
                    </div>


                    <Row>
                        <Col>
                            <Card>
                                <Table responsive="true">
                                    <Table.Header>
                                        <tr>
                                            <Table.ColHeader>ID</Table.ColHeader>
                                            <Table.ColHeader>Nome</Table.ColHeader>
                                            <Table.ColHeader>Descrição</Table.ColHeader>
                                            
                                            <Table.ColHeader>Ações</Table.ColHeader>
                                        </tr>
                                    </Table.Header>
                                    <Table.Body>

                                        {files.length > 0 ?

                                            (files.map(file => (

                                                <Table.Row key={file.id}>
                                                    <Table.Col>{file.id}</Table.Col>
                                                    <Table.Col>{file.title}</Table.Col>
                                                    <Table.Col>{file.description}</Table.Col>
                                                    
                                                    <Table.Col>
                                                        <Button.List>

                                                            <Button outline size="sm" color="secondary">Download</Button>
                                                            <Button outline size="sm" color="primary"
                                                                onClick={(e) => handleEditFile(file.id)}>
                                                                Editar
                                                            </Button>
                                                            <Button outline size="sm"
                                                                color="danger"
                                                                icon="trash"
                                                                title="Deletar Arquivo"
                                                                onClick={(e) => handleDeleteFile(file.id)}>
                                                                Excluir
                                                            </Button>

                                                        </Button.List>
                                                    </Table.Col>
                                                </Table.Row>

                                            ))

                                            ) : (

                                                <Table.Row>
                                                    <Table.Col>
                                                        Nenhum arquivo cadastrado!
                                                </Table.Col>

                                            </Table.Row>


                                            )}

                                    </Table.Body>
                                </Table>

                            </Card>

                        </Col>
                    </Row>

                </Page.Content>
                    
            </PanelFilesContainer>
            <Site.Footer />

        </>
    )
}