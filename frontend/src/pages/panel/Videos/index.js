import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import NavContent from '../Components/Nav';
import HeaderContent from '../Components/Header';

import "tabler-react/dist/Tabler.css";
import { PanelVideosContainer } from './styles.js';

export default function PanelVideos() {

    return (
        <>
            <PanelVideosContainer>
                <Container>
                    <HeaderContent />
                    <Row>
                        <Col>
                            <NavContent />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Vídeos</h1>
                        </Col>
                    </Row>
                </Container>
            </PanelVideosContainer>
        </>
    )
}