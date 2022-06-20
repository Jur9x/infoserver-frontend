import React from "react";
import { Container, Row} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { PLAYERS } from "../utils/queries";
import { PlayerCard } from "../components/PlayerCard";
import './Hraci.css';

export default function Players() {
  const { loading, error, data } = useQuery(PLAYERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const playrs = data.players.data;

  return (
    <>
    <br></br>
    <br></br>
    <Container fluid>
      <Row>
      {playrs.map((playrs) => (
        <PlayerCard
          id={playrs.id}
          name={playrs.attributes.jmenoprijmeni}
          photo={playrs.attributes.obrazek.data.attributes.url}
          />
          ))}
          </Row>
    </Container>
    </>
  );
}