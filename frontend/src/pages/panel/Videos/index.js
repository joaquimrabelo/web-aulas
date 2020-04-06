import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import { Site, Page} from 'tabler-react';
import Wrapper from '../Components/Wrapper'

import "tabler-react/dist/Tabler.css";
import { PanelVideosContainer } from './styles.js';

export default function PanelVideos() {

    return (
        <>
            <PanelVideosContainer>
              
                <Wrapper />

                <Page.Content>

                    <h1>Vídeos</h1>

                </Page.Content>


            </PanelVideosContainer>
                <Site.Footer />
        </>
    )
}