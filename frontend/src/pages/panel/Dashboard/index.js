import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { DashboardContainer } from './styles.js';
import { Container, Row, Col } from 'react-grid-system';
import Wrapper from '../Components/Wrapper'

import { StampCard, Page, Site, AccountDropdown, Nav } from 'tabler-react';

import api from '../../../services/api';

export default function Dashboard() {

    const token = localStorage.getItem('painel-token') || false;

    const [courses, setCourses] = useState(0);
    const [clients, setClients] = useState(0);
    const [videos, setVideos] = useState(0);
    const [files, setFiles] = useState(0);

    const history = useHistory();

    async function getProfile () {

        try {
            const response = await api.get('painel/perfil', {
                headers: { 'X-Access-Token': token },
            });
            if (response.data) {
                setCourses(response.data.countCursos)
                setClients(response.data.countClients)
                setVideos(response.data.countVideos)
                setFiles(response.data.countFiles)
            }

        } catch (error) {
            console.log("error")
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            }
        } 
        
    }

    useEffect(() => {
        getProfile()
    }, []);

    

    return (
        <>

            <DashboardContainer>
                <Wrapper />

                <Page.Content>
                    
                    <h1>Dashboard</h1>
                        
                    <Row>
                        <Col sm={3}>
                            <StampCard header="Cursos" icon="airplay" color="blue">
                                {courses}
                            </StampCard>
                        </Col>
                        <Col sm={3}>
                            <StampCard header="Clientes" icon="users" color="green">
                                {clients}
                            </StampCard>
                        </Col>
                        <Col sm={3}>
                            <StampCard header="Vídeos" icon="video" color="yellow">
                                {videos}
                            </StampCard>
                        </Col>
                        <Col sm={3}>
                            <StampCard header="Arquivos" icon="upload" color="red">
                                {files}
                            </StampCard>
                        </Col>
                    </Row>

                </Page.Content>

            </DashboardContainer>
            
            <Site.Footer />

        </>
    )

}