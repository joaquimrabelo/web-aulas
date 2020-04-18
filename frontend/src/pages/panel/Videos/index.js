import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import ReactPlayer from 'react-player';

import { Site, Page, Card, Button} from 'tabler-react';
import Wrapper from '../Components/Wrapper'

import "tabler-react/dist/Tabler.css";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { PanelVideosContainer } from './styles.js';

import api from '../../../services/api';

export default function PanelVideos() {

    const token = localStorage.getItem('painel-token') || false;
    const [videos, setVideos] = useState([]);
    const [totalVideos, setTotalVideos] = useState(0);

    /* title, description, link, price, duration, photo */

    const history = useHistory();
    const location = useLocation();

    /* LIST ALL */
    async function getVideos() {

        try {
            const response = await api.get('videos', {
                headers: { 'X-Access-Token': token },
            });

            if (response.data) {
                setVideos(response.data)
            }

        } catch (error) {
            console.log("error", error.response)
            if (error.response && error.response.data) {
                console.log(error.response.data.message)
            }
        }

    }

    /* EDIT */
    async function handleEditVideo(id) {
        console.log(id)
        history.push(`videos/${id}/edit`)
    }

    /* DELETE */
    async function handleClickDelete(id) {
        try {
            const response = await api.delete(`videos/${id}`, {
                headers: { 'X-Access-Token': token },
            });
            console.log(response.data)
            setVideos(videos.filter(video => video.id !== id))

        } catch (error) {
            alert("Erro ao deletar Vídeo, tente novamente.")
        }
    }


    async function handleDeleteVideo(id) {

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <h2>Confirmação</h2>
                        <p>Tem certeza que deseja excluir este Vídeo?</p>
                        <button className="btn-modal"
                            onClick={onClose}> Não </button>
                        <button
                            className="btn-modal"
                            onClick={(e) => {
                                handleClickDelete(id);
                                onClose();
                            }}
                        >
                            Sim, pode excluir!
                    </button>
                    </div>
                );
            }
        });

    }




    useEffect(() => {
        getVideos();

    }, [token]);

    useEffect(() => {
        console.log('location', location)

    }, [location]);


    return (
        <>
            <PanelVideosContainer>
              
                <Wrapper />

                <Page.Content>

                    {location.state !== undefined ?
                        <Row>
                            <Col>
                                <div className="alert alert-success">{location.state.detail}</div>
                            </Col>
                        </Row> : ''}

                    <div className="title-button-block">
                        <Col sm={7} md={9}>
                            <h1>Vídeos</h1>
                            <p>Total de Vídeos: {totalVideos}</p> 
                        </Col>

                        <Col sm={5} md={3}>
                            <Button color="primary" pill block RootComponent="a" href="/painel/videos/add">
                                Adicionar Vídeo
                            </Button>
                        </Col>
                    </div>

                    

                    {videos.length > 0 ?

                        (videos.map(video => (

                            <Row key={video.id}>

                                <Col sm={6}>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title>
                                                {video.name}
                                            </Card.Title>
                                            <Card.Options>
                                                <Button outline color="primary" size="sm">
                                                    Editar
                                                </Button>
                                                <Button outline color="secondary" size="sm" className="ml-2">
                                                    Desativar
                                                </Button>
                                                <Button outline color="danger" size="sm" className="ml-2" icon="trash" />

                                            </Card.Options>
                                        </Card.Header>
                                        <Card.Body>
                                            <p>{video.description}</p>
                                            <ReactPlayer
                                                url='https://www.youtube.com/watch?'
                                                width="100%"
                                                height="230px" />
                                        </Card.Body>
                                        <Card.Footer>Cursos: Curso1</Card.Footer>
                                    </Card>

                                </Col>
                                </Row>

                                ))

                                ) : (

                                <Row>
                                    <Col>
                                        Nenhum vídeo cadastrado!
                                    </Col>

                                </Row>


                                )}
                        

                </Page.Content>


            </PanelVideosContainer>
                <Site.Footer />
        </>
    )
}