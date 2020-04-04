import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import NavContent from '../Components/Nav';
import HeaderContent from '../Components/Header';

import "tabler-react/dist/Tabler.css";
import { PanelFilesContainer } from './styles.js';

export default function PanelFiles() {

    return (
        <>
            <PanelFilesContainer>
                <Container>
                    <HeaderContent />
                    <Row>
                        <Col>
                            <NavContent />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Arquivos</h1>
                        </Col>
                    </Row>
                </Container>
            </PanelFilesContainer>
        </>
    )
}