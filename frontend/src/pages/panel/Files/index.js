import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import Wrapper from '../Components/Wrapper'
import { Site, Page } from 'tabler-react';

import "tabler-react/dist/Tabler.css";
import { PanelFilesContainer } from './styles.js';

export default function PanelFiles() {

    return (
        <>
            <PanelFilesContainer>
                <Wrapper />
                <Page.Content>
                    
                    <h1>Arquivos</h1>
                  

                </Page.Content>
                    
            </PanelFilesContainer>
            <Site.Footer />

        </>
    )
}