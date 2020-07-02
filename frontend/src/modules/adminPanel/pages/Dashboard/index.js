import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { DashboardContainer } from './styles.js';
import { Row, Col } from 'react-grid-system';
import Wrapper from '../../components/Wrapper';

import { StampCard, Page, Site } from 'tabler-react';

import api from '../../../../services/api';

export default function Dashboard() {

    const token = localStorage.getItem('painel-token') || false;

    const [courses, setCourses] = useState(0);
    const [clients, setClients] = useState(0);
    const [videos, setVideos] = useState(0);
    const [files, setFiles] = useState(0);

   /*  const history = useHistory(); */

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
                        <Col sm={6} md={3}>
                            <a href="/painel/cursos">
                                <StampCard header="Cursos" icon="airplay" color="blue">
                                    <h4>{courses}</h4>
                                </StampCard> 
                            </a>
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="/painel/clientes">
                                <StampCard header="Clientes" icon="users" color="green">
                                    <h4>{clients}</h4>
                                </StampCard>
                            </a>
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="/painel/videos">
                                <StampCard header="Vídeos" icon="video" color="yellow">
                                    <h4>{videos}</h4>
                                </StampCard>
                            </a>
                           
                        </Col>
                        <Col sm={6} md={3}>
                            <a href="/painel/arquivos">
                                <StampCard header="Arquivos" icon="upload" color="red">
                                    <h4>{files}</h4>
                                </StampCard>
                            </a>
                          
                        </Col>
                    </Row>

                </Page.Content>

            </DashboardContainer>
            
            <Site.Footer />

        </>
    )

}