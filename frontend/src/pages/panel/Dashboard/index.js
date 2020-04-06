import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { DashboardContainer } from './styles.js';
import { Container, Row, Col } from 'react-grid-system';
import Wrapper from '../Components/Wrapper'

import { StampCard, Page, Site, AccountDropdown, Nav } from 'tabler-react';

import api from '../../../services/api';

export default function Dashboard() {

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

    return (
        <>


            <DashboardContainer>
                <Wrapper />

                <Page.Content>

                    
                    <h1>Dashboard</h1>
                        
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

                </Page.Content>



            </DashboardContainer>
                <Site.Footer />

        </>
    )

}