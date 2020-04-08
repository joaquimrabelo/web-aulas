import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { Loader } from './styles.js';

export default function Loading() {

    return (
        <>
        <Loader>
            <Container>
                <Row>
                    <Col>
                        
                        Carregando...
                        
                    </Col>
                </Row>
            </Container>
        </Loader>
            

        </>
    )
}