import React from 'react';
import Wrapper from '../Components/Wrapper'

import { Site, Page } from 'tabler-react'
import "tabler-react/dist/Tabler.css";

import { PanelCoursesContainer } from './styles'

export default function PanelCourses() {

    return (
        <>  

        <PanelCoursesContainer>

            <Wrapper />

            <Page.Content>
                
                <h1>Cursos</h1>

            </Page.Content>

        </PanelCoursesContainer>

        <Site.Footer />
      
        </>
    )
}