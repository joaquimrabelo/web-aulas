import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Wrapper from '../Components/Wrapper';
import { Site, Page, Card, Button } from 'tabler-react';

import "tabler-react/dist/Tabler.css";
import { PanelFilesContainer } from './styles.js';

export default function PanelFiles() {

    return (
        <>
            <PanelFilesContainer>
                <Wrapper />
                <Page.Content>
                    
                    <Row className="title-button-block">
                        <Col sm={9}>
                            <h1>Arquivos</h1>
                        </Col>

                        <Col sm={3}>
                            <Button color="primary" pill RootComponent="a" href="/painel/arquivos/add">
                                Adicionar Arquivo
                            </Button>
                        </Col>
                    </Row>

                  

                </Page.Content>
                    
            </PanelFilesContainer>
            <Site.Footer />

        </>
    )
}