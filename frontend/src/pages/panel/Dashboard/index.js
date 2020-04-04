import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { DashboardContainer } from './styles.js';
import { Container, Row, Col } from 'react-grid-system';

import HeaderContent from '../Components/Header';
import NavContent from '../Components/Nav';
import { StampCard } from 'tabler-react';

import api from '../../../services/api';

export default function Dashboard() {

    const history = useHistory();
    const token = localStorage.getItem('painel-token') || false;
    if (!token) {
        history.push('/painel/login');
    }

    /*     try {
        const response = api.get('painel/perfil', { 
            headers: { 'X-Access-Token': token },
            
         });

        if (response.data.auth) {
            console.log("pegar informacoes")
        }

    } catch (error) {
        console.log("error")
        if (error.response && error.response.data) {
            console.log(error.response.data.message)
        }
    }  */


    function handleLogout(e) {

        e.preventDefault();
        console.log("logout")

        localStorage.removeItem('painel-token')
        history.push('/painel/login');
    }

    return (
        <>
        <DashboardContainer>
            <Container>

                <HeaderContent />

                <Row>
                    <Col>
                        <NavContent />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <h1>Dashboard</h1>
                        {/* <button onClick={handleLogout}>Sair</button> */}
                    </Col>
                </Row>

                <Row>
                    <Col sm={3}>
                        <StampCard header="Cursos" icon="airplay" color="blue">
                            30
                        </StampCard>
                    </Col>
                    <Col sm={3}>
                        <StampCard header="Clientes" icon="users" color="green">
                        40
                        </StampCard>
                    </Col>
                    <Col sm={3}>
                        <StampCard header="Vídeos" icon="video" color="yellow">
                        50
                        </StampCard>
                    </Col>
                    <Col sm={3}>
                        <StampCard header="Arquivos" icon="upload" color="red">
                        70
                        </StampCard>
                    </Col>
                </Row>

                

            </Container>
          
                
           
            

            </DashboardContainer>
       
        </>
    )

}