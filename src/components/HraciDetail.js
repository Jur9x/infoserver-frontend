import React from 'react'
import { Container, Col, Row, Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { PLAYER } from '../utils/queries';
import './HraciDetail.css';

export default function HraciDetail() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(PLAYER, { 
        variables: { id: id }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>{ JSON.stringify(error) }</p>

    return (
        <Container className='mb-3 hraciinfo'>
            <Row>
            <Col md={3}></Col>
                <Col md={3}>{data.player.data.attributes.obrazek.data.attributes.url && (
            <Figure.Image
              src={`http://localhost:1337${data.player.data.attributes.obrazek.data.attributes.url}`}
              className='img-fluid rounded'
              width='165'
            />
        )}</Col>
        
                <Col md={3}>
                    <p><b>{data.player.data.attributes.jmenoprijmeni}</b></p>
                    <p>Narozen > {data.player.data.attributes.datumnarozeni}</p>
                    <p>Výška/váha > {data.player.data.attributes.vyska}cm / {data.player.data.attributes.vaha}kg</p>
                    <p>Rodná země > {data.player.data.attributes.state.data.attributes.State}</p>
                    <p>Klub > {data.player.data.attributes.team.data.attributes.jmeno}</p>
                    <p>Číslo dresu > {data.player.data.attributes.cislodresu}</p>
                    <p>V týmu od > {data.player.data.attributes.vtymuod}</p>
                    <p>{/*nic*/}</p>
                    <p>Pozice > {data.player.data.attributes.post.data.attributes.post}</p>
                </Col>
                <Col md={3}></Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
        </Container>
    );
}